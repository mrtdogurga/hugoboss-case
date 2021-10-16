import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListAddComponent } from './hugoboss/list-add/list-add.component';
import { ListUpdateComponent } from './hugoboss/list-update/list-update.component';
import { OrderComponent } from './hugoboss/order.component';

const routes: Routes = [
  {path:'list',component:OrderComponent},
  {path:'list-add',component : ListAddComponent},
  {path:'list-update',component : ListUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
