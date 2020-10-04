import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '2');
    params = params.append('nombre', 'Fernando Herrera');


   /*  const headers = new HttpHeaders({
    'x-token': 'aasdjk132'
   }); */

  // para manejar el error lo forzamos cambiando la url del endpoint
    return this.http.get(`https://reqres.in/api/user`, {
      params
  // , headers
    }).pipe(
      // tslint:disable-next-line: no-string-literal
      map( resp => resp['data'] ),
     // catchError(err => this.manejarError(err))
    );

  }
/*
   manejarError(error: HttpErrorResponse){
    console.warn('sucedio un error', error);
    return throwError('Error personalizado');
   }
*/
}
