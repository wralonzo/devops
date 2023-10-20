
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CrearSolicitudComponet } from './create/crear.solicitud.componente';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
		{ path: 'home', component: CrearSolicitudComponet },
    {
      path: '**',
      redirectTo: '/home'
    }
	])],
	exports: [RouterModule]
})
export class RequestRouterModule { }
