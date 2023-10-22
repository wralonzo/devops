import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor(private router: Router) {}

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
        routerLink: '/home',
      },
      {
        label: 'Usuarios',
        icon: 'pi pi-user',
        routerLink: '/user',
      },
      {
        label: 'Suscripcion',
        icon: 'pi pi-credit-card',
        routerLink: '/suscription',
      },
      {
        label: 'Solicitudes',
        icon: 'pi pi-calculator',
        routerLink: '/solicitud',
      },
      {
        label: 'Capacitacion',
        icon: 'pi pi-list',
        routerLink: '/capacitacion',
      },

      {
        label: 'Matriz de riesgos',
        icon: 'pi pi-database',
        routerLink: '/matriz',
      },

      {
        label: 'Herramientas',
        icon: 'pi pi-book',
        routerLink: '/tool',
      },
      {
        label: 'Cerrar sesion',
        icon: 'pi pi-cog',
        command: (event) => {
          localStorage.clear();
          this.router.navigateByUrl('/');
        },
      },
    ];
  }
}
