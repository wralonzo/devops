import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-register-capacitacion',
  templateUrl: './capacitacion.component.html',
})
export class CrearCapacitacionComponet {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      nombre: ['', Validators.required],
      tipo: ['', Validators.required],
      descripcion: ['', Validators.required],
      contenido: ['', Validators.required],
    });
  }
  login() {
    const token = localStorage.getItem('token');
    const payload = {
      nombre: this.loginForm.value.nombre,
      tipo: this.loginForm.value.tipo,
      descripcion: this.loginForm.value.descripcion,
      contenido: this.loginForm.value.contenido,
    };

    this.http
      .post<any>(hostGets + 'capacitacion', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe(
        (res) => {
          localStorage.setItem('token', res.token);
          alert('Registro exito');
          this.router.navigateByUrl('/capacitacion');
        },
        (err) => {
          alert(err.error ?? 'Error al conectar al servidor');
        }
      );
  }
}
