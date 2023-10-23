import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class UnauthenticatedInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: any) => {
        debugger;
        if (error.status === 0) {
          var data = localStorage.getItem('token');
          alert(
            'Error 500 en el servidor intente de nuevo o cierre sesion e intente de nuevo'
          );
          // localStorage.clear();
          // this.router.navigateByUrl('/');
        }
        throw {
          error: 'Operacion exitosa',
        };
      })
    );
  }
}
