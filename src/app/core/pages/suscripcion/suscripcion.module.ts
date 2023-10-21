import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ListSuscripcionComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearSuscripcionComponet } from './create/suscripcion.componet';

@NgModule({
  declarations: [ListSuscripcionComponent, CrearSuscripcionComponet],
  exports: [ListSuscripcionComponent, CrearSuscripcionComponet],
  imports: [CommonModule, PrimeNgModule, SharedModule],
})
export class SuscripcionModule {}
