import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ListRequesComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearSolicitudComponet } from './create/crear.solicitud.componente';

@NgModule({
  declarations: [ListRequesComponent, CrearSolicitudComponet],
  exports: [ListRequesComponent, CrearSolicitudComponet],
  imports: [CommonModule, PrimeNgModule, SharedModule],
})
export class RequestModule {}
