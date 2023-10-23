import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi } from '../../constants/host-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
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
    });
  }
  login() {
    const payload = {
      email: this.loginForm.value.email,
      contrasenia: this.loginForm.value.password,
    };
    this.http.post<any>(hostApi + 'authenticar', payload).subscribe(
      (res) => {
        if (!res.token) {
          alert('Error credenciales no validas');
          return;
        }
        localStorage.setItem('token', res.token);
        localStorage.setItem('idUsuario', res.idUsuario);
        localStorage.setItem('nombre', res.nombre);
        localStorage.setItem('apellido', res.apellido);
        localStorage.setItem('email', res.email);
        localStorage.setItem('contrasenia', res.contrasenia);
        localStorage.setItem('rol', res.rol);
        this.router.navigateByUrl('/home');
      },
      (err) => {
        alert('Error credenciales no validas' + err.error ?? '');
      }
    );
  }
}
