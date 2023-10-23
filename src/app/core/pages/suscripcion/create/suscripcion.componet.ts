import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-register',
  templateUrl: './suscripcion.component.html',
})
export class CrearSuscripcionComponet {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      suscripcion: [''],
      fechaIncio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      metodoPago: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }
  login() {
    const token = localStorage.getItem('token');
    const payload = {
      suscripcion: this.loginForm.value.suscripcion,
      fechaIncio: this.loginForm.value.fechaIncio,
      fechaFin: this.loginForm.value.fechaFin,
      metodoPago: this.loginForm.value.metodoPago,
      precio: this.loginForm.value.precion
    };

    this.http
      .post<any>(hostGets + 'suscripcion', payload, {
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
