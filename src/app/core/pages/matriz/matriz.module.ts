import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ListMatrizComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearMatrizComponet } from './create/matriz.componet';

@NgModule({
  declarations: [ListMatrizComponent, CrearMatrizComponet],
  exports: [ListMatrizComponent, CrearMatrizComponet],
  imports: [CommonModule, PrimeNgModule, SharedModule],
})
export class MatrizMdule {}
