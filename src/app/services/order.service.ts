import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Order } from '../order/Order';


@Injectable()
export class OrderService {

  constructor(private http: HttpClient) { }
  // getOrders(): Observable<Order[]> {
  //   return this.http.get<Order[]>(environment.jsonServerUrl).pipe(
  //     catchError(this.handleError)
  //   );
  // }

  // addOrder(order: Order): Observable<Order> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Token'
  //     })
  //   }
  //   return this.http.post<Order>(environment.jsonServerUrl, order, httpOptions).pipe(
  //     catchError(this.handleError)
  //   );
  // }


  createOrder(order: Order) {
    return this.http.post(environment.jsonServerUrl, order);
  }
  getAllOrder(): Observable<Order[]> {
    return this.http.get<Order[]>(environment.jsonServerUrl)
  }
  getOrder(orderId:any):any{
    return this.http.get(environment.jsonServerUrl+ "/" + orderId)
  }
  updateOrder(orderId:number,order: Order) {
    debugger
    return this.http.patch(environment.jsonServerUrl + "/"+ orderId, order)
  }
  deleteOrder(order: Order) {
    return this.http.delete(environment.jsonServerUrl + "/" + order.id)
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
    if (err.error instanceof ErrorEvent) {
      errorMessage = 'Bir hata oluştu ' + err.error.message
    }
    else {
      errorMessage = 'Sistemsel bir hata'
    }
    return throwError(errorMessage);
  }
}

