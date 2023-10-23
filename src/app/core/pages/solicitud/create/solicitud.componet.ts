import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-register-solicitud',
  templateUrl: './solicitud.component.html',
})
export class CrearSolicitudCapacitacionComponet {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      estado: ['', Validators.required],
      fechaSolicitud: ['', Validators.required],
      nombreEmpresa: ['', Validators.required],
      reciboPago: ['', Validators.required],
    });
  }
  login() {
    const token = localStorage.getItem('token');
    const payload = {
      estado: this.loginForm.value.estado,
      fechaSolicitud: this.loginForm.value.fechaSolicitud,
      nombreEmpresa: this.loginForm.value.nombreEmpresa,
      reciboPago: this.loginForm.value.reciboPago,
    };

    this.http
      .post<any>(hostGets + 'solicitud-capacitacion', payload, {
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
          this.router.navigateByUrl('/solicitud');
        },
        (err) => {
          alert(err.error ?? 'Error al conectar al servidor');
        }
      );
  }
}
