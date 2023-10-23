import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { hostApi, hostGets } from 'src/app/core/constants/host-api';

@Component({
  selector: 'app-register-tool',
  templateUrl: './tool.component.html',
})
export class CrearToolComponet {
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
      .post<any>(hostGets + 'herramienta', payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe(
        (res) => {
          alert('Registro exito');
          this.router.navigateByUrl('/tool');
        },
        (err) => {
          alert(err.error ?? 'Error al conectar al servidor');
        }
      );
  }
}
