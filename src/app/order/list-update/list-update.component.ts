import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { OrderService } from 'src/app/services/order.service';

import { Order } from '../Order';

@Component({
  selector: 'app-list-update',
  templateUrl: './list-update.component.html',
  styleUrls: ['./list-update.component.css'],
  providers: [OrderService]
})
export class ListUpdateComponent implements OnInit {


  constructor(private formBuilder: FormBuilder,
    private orderService: OrderService,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute) { }
  listUpdateForm: FormGroup;
  order: Order = new Order();
  orderId:number;
  createListUpdateForm() {
    this.listUpdateForm = this.formBuilder.group({
      Order: ["", Validators.required],
      Model: ["", Validators.required],
      Date: ["", Validators.required],
      Country: ["", Validators.required],
      Status: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.createListUpdateForm()
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.orderId = id;
      if (id > 0) {
        this.orderService.getOrder(id).subscribe(data => {
          this.order = data;
          this.listUpdateForm = this.formBuilder.group({
            Order: [data.Order, Validators.required],
            Model: [data.Model, Validators.required],
            Date: [formatDate(data.Date, 'dd-MM-yyy','en'), Validators.required],
            Country: [data.Country, Validators.required],
            Status: [data.Status, Validators.required],
          });
          this.listUpdateForm.controls.controlName.setValue("Date",formatDate(data.Date,'yyyy-MM-dd','en'));
        })
      }

    });
  }
  update() {
    if (this.listUpdateForm.valid) {
      this.order = Object.assign({}, this.listUpdateForm.value)
    }
    this.orderService.updateOrder(this.orderId,this.order).subscribe(data =>{
      this.alertifyService.success("Order Güncellendi");
    },error=> {
      this.alertifyService.error("Güncelleme Başarısız")
    })

    // this.orderService.addList(this.order).subscribe(data=>{
    //   this.alertifyService.success(data.Order + " başarıyla güncellendi.")
    // });    
  }

  parseDate(dateString: string): Date {
    debugger
    if (dateString) {
        return new Date(dateString);
    }
    return null;
}

}
