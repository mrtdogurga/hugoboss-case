import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { OrderService } from 'src/app/services/order.service';
import { Order } from '../hugoboss';

@Component({
  selector: 'app-list-update',
  templateUrl: './list-update.component.html',
  styleUrls: ['./list-update.component.css'],
  providers:[OrderService]
})
export class ListUpdateComponent implements OnInit {

  
  constructor(private formBuilder:FormBuilder,
    private orderService:OrderService,
    private alertifyService:AlertifyService) 
    { }
    listUpdateForm:FormGroup;
    order:Order = new Order();
    createListUpdateForm(id=1){
      this.listUpdateForm = this.formBuilder.group({
        Order:[this.order.Order,Validators.required],
        Model:["",Validators.required],
        Date:["",Validators.required],
        Country:["",Validators.required],
        Status:["",Validators.required],
      });
    }

  ngOnInit(): void {
    this.createListUpdateForm();    
  }
  update(){
    if(this.listUpdateForm.valid){
      this.order = Object.assign({}, this.listUpdateForm.value)
    }

    // this.orderService.addList(this.order).subscribe(data=>{
    //   this.alertifyService.success(data.Order + " başarıyla güncellendi.")
    // });    
}


}
