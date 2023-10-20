import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-register',
  templateUrl: './crear.solicitud.component.html',
  styleUrls: ['./crear.solicitud.component.css']
})
export class CrearSolicitudComponet{
  public loginForm!: FormGroup

  constructor(private formbuilder: FormBuilder,private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required]
    })
  }
  login(){
    const token = localStorage.getItem("token",);
    const payload = {
      email: this.loginForm.value.email,
      contrasenia: this.loginForm.value.password ,
      nombre: this.loginForm.value.nombre,
      apellido: this.loginForm.value.apellido
    };

    this.http.post<any>(hostApi+"registro", payload, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .subscribe(res=>{
      if(!res.token){
        alert('No se registro el usuario');
        return;
      }
      localStorage.setItem("token", res.token);
     alert('Registro exitos');
      this.router.navigateByUrl('/login')
    },err=>{
     alert('Error al conectar al servidor');
    })
  }

}
