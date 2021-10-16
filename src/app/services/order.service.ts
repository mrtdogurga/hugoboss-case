import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { hugoboss } from '../hugoboss/hugoboss';
import {tap,catchError, retry} from 'rxjs/operators';

@Injectable()
export class OrderService {
  
  constructor(private http: HttpClient) { }
  path = "http://localhost:3000/hugo"  

  getHugobosss():Observable<hugoboss[]>{
    return this.http.get<hugoboss[]>(this.path).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
}  
addList(order:hugoboss):Observable<hugoboss>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.http.post<hugoboss>(this.path,order,httpOptions).pipe(
    tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError)
  );
}

handleError(err: HttpErrorResponse){
  let errorMessage = ''
  if(err.error instanceof ErrorEvent){
errorMessage = 'Bir hata oluştu ' + err.error.message
  }
  else{
    errorMessage = 'Sistemsel bir hata'
  }
  return throwError(errorMessage);
}
  }

