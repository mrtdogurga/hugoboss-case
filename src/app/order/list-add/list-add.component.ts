import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { OrderService } from 'src/app/services/order.service';

import { Order } from '../Order';

@Component({
  selector: 'app-list-add',
  templateUrl: './list-add.component.html',
  styleUrls: ['./list-add.component.css'],
  providers: [OrderService]
})
export class ListAddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private orderService: OrderService,
    private alertifyService: AlertifyService,
    public activatedRoute:ActivatedRoute
  ) { }
  listAddForm: FormGroup;
  order: Order = new Order();

  createListAddForm() {
    this.listAddForm = this.formBuilder.group({
      Order: ["", Validators.required],
      Model: ["", Validators.required],
      Date: ["", Validators.required],
      Country: ["", Validators.required],
      Status: ["", Validators.required],
    });
  }

  ngOnInit() {
    this.createListAddForm();
  }

  add() {
    if (this.listAddForm.valid) {
      this.order = Object.assign({}, this.listAddForm.value)
    }
    this.orderService.createOrder(this.order).subscribe(data => {
      this.alertifyService.success(" başarıyla eklendi") //data.Order + 
    });
  }
}
