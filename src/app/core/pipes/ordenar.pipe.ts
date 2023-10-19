import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heroe[], ordenarPor: number = 1): Heroe[] {
    if(ordenarPor === 1){
      return heroes;
    }else if(ordenarPor === 2){
      heroes = heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
    }else if(ordenarPor === 3){
      heroes = heroes.sort((a, b) => (a.vuela > b.vuela ? -1 : 1));
    }else if(ordenarPor === 4){
      heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
    }
    return heroes;
  }
}
