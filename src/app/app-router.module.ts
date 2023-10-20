import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './core/pages/basicos/basicos.component';
import { NumerosComponent } from './core/pages/numeros/numeros.component';
import { NoComunesComponent } from './core/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './core/pages/ordenar/ordenar.component';
import { LoginComponent } from './core/pages/login/basicos.component';
import { AuthGuard } from './core/pages/guard/guard.service';
import { RegisterComponet } from './core/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponet
  },
  {
    path: 'home',
    component: BasicosComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'numeros',
    component: NumerosComponent
  },
  {
    path: 'no-comunes',
    component: NoComunesComponent,
  },
  {
    path: 'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
