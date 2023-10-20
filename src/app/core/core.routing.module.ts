import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'register',
        data: { breadcrumb: 'Register' },
        loadChildren: () =>
          import('./pages/request/request.module').then((m) => m.RequestModule),
      },

      { path: '**', redirectTo: '/user' },
    ]),
  ],
  exports: [RouterModule],
})
export class CoreRoutingModule {} {}
