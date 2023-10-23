import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { BasicosComponent } from './core/pages/basicos/basicos.component';
import { LoginComponent } from './core/pages/login/basicos.component';
import { AuthGuard } from './core/pages/guard/guard.service';
import { RegisterComponet } from './core/pages/register/register.component';
import { ListRequesComponent } from './core/pages/request/list/list.component';
import { CrearSolicitudComponet } from './core/pages/request/create/crear.solicitud.componente';
import { ListSuscripcionComponent } from './core/pages/suscripcion/list/list.component';
import { CrearSuscripcionComponet } from './core/pages/suscripcion/create/suscripcion.componet';
import { ListSolicitudSusComponent } from './core/pages/solicitud/list/list.component';
import { CrearSolicitudCapacitacionComponet } from './core/pages/solicitud/create/solicitud.componet';
import { ListCapacitacionComponent } from './core/pages/capacitacion/list/list.component';
import { CrearCapacitacionComponet } from './core/pages/capacitacion/create/capacitacion.componet';
import { ListToolComponent } from './core/pages/herramienta/list/list.component';
import { CrearToolComponet } from './core/pages/herramienta/create/tool.componet';
import { ListMatrizComponent } from './core/pages/matriz/list/list.component';
import { CrearMatrizComponet } from './core/pages/matriz/create/matriz.componet';

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
    path: 'suscription/register',
    component: CrearSuscripcionComponet,
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
    path: 'solicitud/register',
    component: CrearSolicitudCapacitacionComponet,
    canActivate: [AuthGuard],
  },
  {
    path: 'capacitacion',
    component: ListCapacitacionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'capacitacion/register',
    component: CrearCapacitacionComponet,
    canActivate: [AuthGuard],
  },
  {
    path: 'tool',
    component: ListToolComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'tool/register',
    component: CrearToolComponet,
    canActivate: [AuthGuard],
  },

  {
    path: 'matriz',
    component: ListMatrizComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'matriz/register',
    component: CrearMatrizComponet,
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
