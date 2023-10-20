// import { Injectable } from '@angular/core';
// import {
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
//   HttpInterceptor
// } from '@angular/common/http';
// import { catchError, Observable, throwError } from 'rxjs';
// import { ErrorHandlerService } from '@shared/services/error-handler.service';

// @Injectable()
// export class UnauthenticatedInterceptor implements HttpInterceptor {

//   constructor(private notificationError: ErrorHandlerService) {}

//   intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//     return next.handle(request).pipe(
//       catchError((error: any) => {
//         if (error.status === 401) {
//           this.notificationError.onOpenErrorDialog('ERRORS.EXPIRED_SESSION')
//           this.authService.logout()
//         }
//         throw error
//       })
//     );
//   }
// }
// // 