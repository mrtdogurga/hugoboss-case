import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { OrderService } from '../services/order.service';
import { Order } from './hugoboss';

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
  title = "Hugo Boss Listesi"
  filterText = ""
  Orders: Order[];

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
    this.orderService.getOrders().subscribe(data=>{
      this.Orders = data
    })
  })
}
  delete(Orders: Order){
   this.orderService.getOrders().subscribe(data=>{
     let index = this.Orders.indexOf(Orders)
     this.Orders.splice(Orders.Id);
    })
    
  }
}
