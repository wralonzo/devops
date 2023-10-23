import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-register',
  templateUrl: './crear.solicitud.componente.html',
  styleUrls: ['./crear.solicitud.componente.css'],
})
export class CrearSolicitudComponet {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      rol: ['', Validators.required],
    });
  }
  login() {
    const token = localStorage.getItem('token');
    const payload = {
      email: this.loginForm.value.email,
      contrasenia: this.loginForm.value.password,
      nombre: this.loginForm.value.nombre,
      apellido: this.loginForm.value.apellido,
      rol: this.loginForm.value.rol
    };

    this.http
      .post<any>(hostGets + 'usuario', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe(
        (res) => {
          if (!res.token) {
            alert('No se registro el usuario');
            return;
          }
          alert('Registro exitos');
          this.router.navigateByUrl('/user');
        },
        (err) => {
          alert( err.error ?? 'Error al conectar al servidor');
        }
      );
  }
}
