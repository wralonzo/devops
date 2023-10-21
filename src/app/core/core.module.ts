import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { NumerosComponent } from './pages/numeros/numeros.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { RequestModule } from './pages/request/request.module';
import { CoreRoutingModule } from './core.routing.module';
import { SuscripcionModule } from './pages/suscripcion/suscripcion.module';



@NgModule({
  declarations: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe,
    CoreComponent
  ],
  exports: [
    NumerosComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,
    SuscripcionModule
  ],
  imports: [
    RequestModule,
    SuscripcionModule,
    CommonModule,
    PrimeNgModule,
    SharedModule
  ],
})
export class CoreModule { }
