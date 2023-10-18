import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html'
})
export class NoComunesComponent {

  // i18Nselect
  public nombre: string = 'Susana';
  public genero: string = 'femenino';

  public invitacionMap ={
    'masculino': 'invitarlo',
    'femenino': 'invitarla',

  }

  public clientes: string[] = ['Fernando', 'Maria', 'Lemar', 'Kike' , 'Kike', 'Kike']

  public cleintesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    '=3': 'tenemos tres clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  public personsa = {
    nombre: this.nombre,
    edad: 43,
    direccion: 'GT'
  }

  public heroes = {
    nombre: this.nombre,
    edad: 43,
    direccion: 'GT'
  }



  public cambiarCliente(){
    if(this.genero == 'femenino'){
      this.nombre = 'Fernando';
      this.genero = 'masculino';
    }else{
      this.nombre = 'Susana';
      this.genero = 'femenino';
    }
  }

  public borrarCliente(){
    this.clientes.pop();
  }

  public miObsevable = interval(5000);

  public miPromesa = new Promise( ( resolve, reject) => {
    setTimeout(() =>{
      resolve( 'Tenemos data de la promesa' );
    }, 3500);
  });

}
