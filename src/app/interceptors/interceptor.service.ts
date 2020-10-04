import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class InterceptorService implements HttpInterceptor {

  constructor() { }



  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('paso por el interceptor');

    const headers = new HttpHeaders({
      'token-usuario': 'ABC1290381902ALKSDJ1902'
    });

    // return next.handle(req)

    const reqClone = req.clone({
      headers
  // , params
    });



    return next.handle( reqClone ).pipe(
      catchError( this.manejarError )
    );


  }


  manejarError( error: HttpErrorResponse ) {
    console.log('Sucedió un error');
    console.log('Registrado en el log file');
    console.warn(error);
    return throwError('Error personalizado');
  }

}
