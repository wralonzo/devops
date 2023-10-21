import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './core/pages/basicos/basicos.component';
import { NoComunesComponent } from './core/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './core/pages/ordenar/ordenar.component';
import { LoginComponent } from './core/pages/login/basicos.component';
import { AuthGuard } from './core/pages/guard/guard.service';
import { RegisterComponet } from './core/pages/register/register.component';
import { ListRequesComponent } from './core/pages/request/list/list.component';
import { CrearSolicitudComponet } from './core/pages/request/create/crear.solicitud.componente';
import { ListSuscripcionComponent } from './core/pages/suscripcion/list/list.component';
import { CrearSuscripcionComponet } from './core/pages/suscripcion/create/suscripcion.componet';
import { ListSolicitudSusComponent } from './core/pages/solicitud/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponet,
  },
  {
    path: 'home',
    component: BasicosComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
  },
  {
    path: 'user',
    component: ListRequesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'suscription',
    component: ListSuscripcionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/register',
    component: CrearSolicitudComponet,
    canActivate: [AuthGuard],
  },
  {
    path: 'solicitud',
    component: ListSolicitudSusComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'tools',
    component: NoComunesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'suscription/register',
    component: CrearSuscripcionComponet,
    canActivate: [AuthGuard],
  },
  {
    path: 'training',
    component: OrdenarComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
