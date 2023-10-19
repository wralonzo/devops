import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent{
public nombreLower: string = 'Suscripciones';
public nombreUpper: string = 'Clientes';
public nombreCompleto: string = 'Usuario';

fecha: Date = new Date();

}
