import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

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
    const token = localStorage.getItem('token');
    const payload = {
      nombre: this.loginForm.value.nombre,
      fechaCreacion: this.loginForm.value.fechaCreacions,
      areaOportunidad: this.loginForm.value.areaOportunidads,
    };

    this.http
      .post<any>(hostGets + 'matriz-riesgo', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe(
        (res) => {
          alert('Registro exito');
          this.router.navigateByUrl('/matriz');
        },
        (err) => {
          alert(err.error ?? 'Error al conectar al servidor');
        }
      );
  }
}
