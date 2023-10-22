import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimeNgModule } from 'src/app/prime-ng/prime-ng.module';
import { ListToolComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CrearToolComponet } from './create/tool.componet';

@NgModule({
  declarations: [ListToolComponent, CrearToolComponet],
  exports: [ListToolComponent, CrearToolComponet],
  imports: [CommonModule, PrimeNgModule, SharedModule],
})
export class ToolModule {}
