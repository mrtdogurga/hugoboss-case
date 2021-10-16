import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { AlertifyService } from './services/alertify.service';
import { HugobossComponent } from './hugoboss/hugoboss.component';
import { OrderFilterPipe } from './hugoboss/order-filter.pipe';
import { ProductAddForms1Component } from './product/product-add-forms1/product-add-forms1.component';
import { ProductAddForms2Component } from './product/product-add-forms2/product-add-forms2.component';
import { ListAddComponent } from './hugoboss/list-add/list-add.component';
import { ListUpdateComponent } from './hugoboss/list-update/list-update.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ProductComponent,
    ProductFilterPipe,
    HugobossComponent,
    OrderFilterPipe,
    ProductAddForms1Component,
    ProductAddForms2Component,
    ListAddComponent,
    ListUpdateComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
