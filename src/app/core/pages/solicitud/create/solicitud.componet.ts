import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';
import { formatDate } from '@angular/common';

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
    const payload = {
      estado: this.loginForm.value.estado,
      fechaSolicitud: formatDate(Date.now(), 'yyyy-MM-dd', 'en-US'),
      nombreEmpresa: this.loginForm.value.nombreEmpresa,
      reciboPago: this.loginForm.value.reciboPago,
      usuario: {
        idUsuario: localStorage.getItem('idUsuario'),
        nombre: localStorage.getItem('nombre'),
        apellido: localStorage.getItem('apellido'),
        email: localStorage.getItem('email'),
        contrasenia: localStorage.getItem('contrasenia'),
        rol: localStorage.getItem('rol'),
      },
    };

    this.http
      .post<any>(hostGets + 'solicitud-capacitacion', payload)
      .subscribe(
        (res) => {
          alert('Registro exito');
          this.router.navigateByUrl('/solicitud');
        },
        (err) => {
          alert(err.error ?? 'Error al conectar al servidor');
        }
      );
  }
}
