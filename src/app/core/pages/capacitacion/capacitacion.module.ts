import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ListCapacitacionComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearCapacitacionComponet } from './create/capacitacion.componet';

@NgModule({
  declarations: [ListCapacitacionComponent, CrearCapacitacionComponet],
  exports: [ListCapacitacionComponent, CrearCapacitacionComponet],
  imports: [CommonModule, PrimeNgModule, SharedModule],
})
export class Capacitacionodule {}
