import { Pipe, PipeTransform } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from './Order';

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {
  data:any;
  constructor(private orderService:OrderService){
    this.orderService.getAllOrder().subscribe(data => {
      this.data = data;
    })
  }

  transform(value: Order[], filterText?: string): Order[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null
    return filterText ? this.data.filter((p: Order) => p.Order.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }

}
