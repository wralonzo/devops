import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Cambiar el local de la app
import localeEsGT from '@angular/common/locales/es-GT';
import { registerLocaleData } from '@angular/common';
import { LoginModule } from './core/pages/login/login.module';

registerLocaleData(localeEsGT);
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    CoreModule,
    LoginModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-GT' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
