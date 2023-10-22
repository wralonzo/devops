import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ListSolicitudSusComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearSolicitudCapacitacionComponet } from './create/solicitud.componet';

@NgModule({
  declarations: [ListSolicitudSusComponent, CrearSolicitudCapacitacionComponet],
  exports: [ListSolicitudSusComponent, CrearSolicitudCapacitacionComponet],
  imports: [CommonModule, PrimeNgModule, SharedModule],
})
export class SolicitudModule {}
