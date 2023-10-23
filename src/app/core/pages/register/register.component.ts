import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi } from '../../constants/host-api';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponet {
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
    });
  }
  login() {
    const payload = {
      email: this.loginForm.value.email,
      contrasenia: this.loginForm.value.password,
      nombre: this.loginForm.value.nombre,
      apellido: this.loginForm.value.apellido,
    };
    this.http.post<any>(hostApi + 'registro', payload).subscribe(
      (res) => {
        alert('Registro exito');
        this.router.navigateByUrl('/login');
      },
      (err) => {
        alert('Error al conectar al servidor');
      }
    );
  }
}
