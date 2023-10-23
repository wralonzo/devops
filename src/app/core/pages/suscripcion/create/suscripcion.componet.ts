import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './suscripcion.component.html',
})
export class CrearSuscripcionComponet {
  public loginForm!: FormGroup;
  public dateNowCurrent: string = formatDate(Date.now(),'yyyy-MM-dd', "en-US").toString();

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dateNowCurrent = formatDate(Date.now(),'yyyy-MM-dd', "en-US").toString();
    this.loginForm = this.formbuilder.group({
      suscripcion: [''],
      fechaIncio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      metodoPago: ['', Validators.required],
      precio: ['', Validators.required],
    });
  }
  login() {
    const payload = {
      suscripcion: this.loginForm.value.suscripcion,
      fechaIncio: this.loginForm.value.fechaIncio,
      fechaFin: this.loginForm.value.fechaFin,
      metodoPago: this.loginForm.value.metodoPago,
      precio: this.loginForm.value.precio,
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
      .post<any>(hostGets + 'suscripcion', payload)
      .subscribe(
        (res) => {
          alert('Registro exito');
          this.router.navigateByUrl('/suscription');
        },
        (err) => {
          alert( err.error.text ||  err.error || 'Error al conectar al servidor');
        }
      );
  }
}
