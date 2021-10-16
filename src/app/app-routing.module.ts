import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HugobossComponent } from './hugoboss/hugoboss.component';
import { ListAddComponent } from './hugoboss/list-add/list-add.component';
import { ListUpdateComponent } from './hugoboss/list-update/list-update.component';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:'products',component : HugobossComponent},
  {path:'product-add-1',component: ProductAddForms1Component},
  {path:'list-add',component : ListAddComponent},
  {path:'list-update',component : ListUpdateComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  //{path:'products/category/:categoryId' ,component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
