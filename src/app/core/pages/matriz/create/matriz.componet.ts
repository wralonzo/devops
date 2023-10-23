import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-register-matriz',
  templateUrl: './matriz.component.html',
})
export class CrearMatrizComponet {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      nombre: ['', Validators.required],
      fechaCreacion: ['', Validators.required],
      areaOportunidad: ['', Validators.required],
    });
  }
  login() {
    const payload = {
      nombre: this.loginForm.value.nombre,
      fechaCreacion: formatDate(Date.now(),'yyyy-MM-dd', "en-US"),
      areaOportunidad: this.loginForm.value.areaOportunidad,
      usuario: {
          idUsuario: localStorage.getItem('idUsuario'),
          nombre: localStorage.getItem('nombre'),
          apellido: localStorage.getItem('apellido'),
          email: localStorage.getItem('email'),
          contrasenia: localStorage.getItem('contrasenia'),
          rol: localStorage.getItem('rol')
      }
    };

    this.http
      .post<any>(hostGets + 'matriz-riesgo', payload)
      .subscribe(
        (res) => {
          alert('Registro exito');
          this.router.navigateByUrl('/matriz');
        },
        (err) => {
          debugger
          alert(err.error ?? 'Error al conectar al servidor');
        }
      );
  }
}
