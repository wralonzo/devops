import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './core/pages/basicos/basicos.component';
import { NoComunesComponent } from './core/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './core/pages/ordenar/ordenar.component';
import { LoginComponent } from './core/pages/login/basicos.component';
import { AuthGuard } from './core/pages/guard/guard.service';
import { RegisterComponet } from './core/pages/register/register.component';
import { ListRequesComponent } from './core/pages/request/list/list.component';

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
    path: 'request',
    component: ListRequesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tools',
    component: NoComunesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'training',
    component: OrdenarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/home'
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
