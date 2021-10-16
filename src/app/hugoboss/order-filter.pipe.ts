import { Pipe, PipeTransform } from '@angular/core';
import { Order } from './hugoboss';

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {

  transform(value: Order[], filterText?: string): Order[] {
    filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:Order)=>p.Order.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
