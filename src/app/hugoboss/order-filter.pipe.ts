import { Pipe, PipeTransform } from '@angular/core';
import { hugoboss } from './hugoboss';

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {

  transform(value: hugoboss[], filterText?: string): hugoboss[] {
    filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter((p:hugoboss)=>p.Order.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
