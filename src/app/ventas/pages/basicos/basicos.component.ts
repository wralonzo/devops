import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent{
public nombreLower: string = 'Willian';
public nombreUpper: string = 'ALONZO';
public nombreCompleto: string = 'WillIAm AloNZo';

fecha: Date = new Date();

}
