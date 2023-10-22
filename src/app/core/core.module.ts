import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { RequestModule } from './pages/request/request.module';
import { CoreRoutingModule } from './core.routing.module';
import { SuscripcionModule } from './pages/suscripcion/suscripcion.module';
import { SolicitudModule } from './pages/solicitud/solicitud.module';
import { Capacitacionodule } from './pages/capacitacion/capacitacion.module';
import { ToolModule } from './pages/herramienta/tool.module';
import { MatrizMdule } from './pages/matriz/matriz.module';



@NgModule({
  declarations: [
    BasicosComponent,
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe,
    CoreComponent
  ],
  exports: [
    BasicosComponent,
    SuscripcionModule,
    SolicitudModule,
    Capacitacionodule,
    ToolModule,
    MatrizMdule
  ],
  imports: [
    RequestModule,
    SuscripcionModule,
    CommonModule,
    PrimeNgModule,
    SharedModule,
    SolicitudModule,
    Capacitacionodule,
    ToolModule,
    MatrizMdule
  ],
})
export class CoreModule { }
