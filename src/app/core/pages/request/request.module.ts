import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PrimeNgModule } from "src/app/prime-ng/prime-ng.module";
import { ListRequesComponent } from "./list/list.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [
    //   NumerosComponent,
    //   NoComunesComponent,
    //   BasicosComponent,
    //   OrdenarComponent,
    //   MayusculasPipe,
    //   VuelaPipe,
    //   OrdenarPipe,
    //   CoreComponent
    ListRequesComponent
    ],
    exports: [
    //   NumerosComponent,
    //   NoComunesComponent,
    //   BasicosComponent,
    //   OrdenarComponent
    ListRequesComponent
    ],
    imports: [
      CommonModule,
      PrimeNgModule,
      SharedModule
    ],
  })
  export class RequestModule { }