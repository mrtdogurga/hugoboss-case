import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {tap,catchError, retry} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Order } from '../hugoboss/hugoboss';

@Injectable()
export class OrderService {
  
  constructor(private http: HttpClient) { }
    

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(environment.jsonServerUrl).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
}  
addOrder(order:Order):Observable<Order>{
  const httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'Token'
    })
  }
  return this.http.post<Order>(environment.jsonServerUrl,order,httpOptions).pipe(
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

