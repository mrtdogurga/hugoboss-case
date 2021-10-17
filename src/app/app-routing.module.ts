import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAddComponent } from './order/list-add/list-add.component';
import { ListUpdateComponent } from './order/list-update/list-update.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  {path:'',component:OrderComponent},
  {path:'list',component:OrderComponent},
  {path:'list-add',component : ListAddComponent},
  {path:'list-update/:id',component : ListUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
