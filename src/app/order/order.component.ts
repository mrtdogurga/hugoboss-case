import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertifyService } from '../services/alertify.service';
import { OrderService } from '../services/order.service';
import { Order } from './Order';

@Component({
  selector: 'app-order',
  templateUrl: './Order.component.html',
  styleUrls: ['./Order.component.css'],
  providers:[OrderService]
})
export class OrderComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private orderService:OrderService,
    private activatedRoute:ActivatedRoute
    ) { }
  title = "Hugo Boss Order Listesi"
  filterText = ""
  orders: any[];
   currentPage:number = 1;
   pageCount:number;
   currentDataList:any[] = [];

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=> {
    this.orderService.getAllOrder().subscribe(data =>{
        this.orders = data;
        this.pageCount = Math.round(this.orders.length /100);
        this.orders.forEach((item,index) => {
          if(index  <= 100)
            this.currentDataList.push(item);
        })

    })
  })
}
  delete(order: Order){
    this.orderService.deleteOrder(order).subscribe(data => {
      this.orderService.getAllOrder().subscribe(data =>{
        this.orders = data;
        this.alertifyService.success(order.Order+" Order Silindi")
    });
    })
  }

getCurrentPages(i:number){
  this.currentDataList = this.orders.slice((i - 1) * 100, i * 100);
}

}
