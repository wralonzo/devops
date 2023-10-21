import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ListSolicitudSusComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearSolicitudComponet } from './create/solicitud.componet';

@NgModule({
  declarations: [ListSolicitudSusComponent, CrearSolicitudComponet],
  exports: [ListSolicitudSusComponent, CrearSolicitudComponet],
  imports: [CommonModule, PrimeNgModule, SharedModule],
})
export class SolicitudModule {}
