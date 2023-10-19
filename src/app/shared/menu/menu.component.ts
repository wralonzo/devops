import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [] ;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-desktop',
        // items: [
        //   {
        //     label: 'Textos y fechas',
        //     icon: 'pi pi-aling-left',
        //     routerLink: '/'
        //   },
        //   {
        //     label: 'Numeros',
        //     icon: 'pi pi-dollar',
        //     routerLink: 'numeros'
        //   },
        //   {
        //     label: 'No comunes',
        //     icon: 'pi pi-globe',
        //     routerLink: 'no-comunes'
        //   }
        // ]
        routerLink: '/',

      },
      {
        label: 'Clientes',
        icon: 'pi pi-cog',
        routerLink: 'ordenar'
      }
    ];
  }
}
