import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  public nombreLower: string = 'Suscripciones';
  public nombreUpper: string = 'Clientes';
  public nombreCompleto: string = 'Usuario';

  fecha: Date = new Date();
  public idUsuario: string = '';
  public nombre: string = '';
  public apellido: string = '';
  public email: string = '';
  public contrasenia: string = '';
  public rol: string = '';

  ngOnInit(): void {
    this.idUsuario = localStorage.getItem('idUsuario')!;
    this.nombre = localStorage.getItem('nombre')!;
    this.apellido = localStorage.getItem('apellido')!;
    this.email = localStorage.getItem('email')!;
    this.contrasenia = localStorage.getItem('contrasenia')!;
    this.rol = localStorage.getItem('rol')!;
  }
}
