
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { CrearSuscripcionComponet } from './create/suscripcion.componet';

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild([
		{ path: 'home', component: CrearSuscripcionComponet },
    {
      path: '**',
      redirectTo: '/home'
    }
	])],
	exports: [RouterModule]
})
export class RequestRouterModule { }
