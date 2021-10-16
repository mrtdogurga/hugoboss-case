import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { OrderService } from '../services/order.service';
import { hugoboss } from './hugoboss';

@Component({
  selector: 'app-hugoboss',
  templateUrl: './hugoboss.component.html',
  styleUrls: ['./hugoboss.component.css'],
  providers:[OrderService]
})
export class HugobossComponent implements OnInit {

  constructor(private alertifyService: AlertifyService,
    private orderService:OrderService,
    private activatedRoute:ActivatedRoute
    ) { }
  title = "Hugo Boss Listesi"
  filterText = ""
  hugobosss: hugoboss[];

  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
    this.orderService.getHugobosss().subscribe(data=>{
      this.hugobosss = data
    })
  })
}
  delete(hugobosss: hugoboss){
    //alert(hugobosss.id)       
   this.orderService.getHugobosss().subscribe(data=>{
     let index = this.hugobosss.indexOf(hugobosss)
     this.hugobosss.splice(hugobosss.id);
    })
    
  }
}
