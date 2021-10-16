import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { ListAddComponent } from './order/list-add/list-add.component';
import { ListUpdateComponent } from './order/list-update/list-update.component';
import { OrderFilterPipe } from './order/order-filter.pipe';
import { OrderComponent } from './order/order.component';
import { AlertifyService } from './services/alertify.service';
import { SortDirective } from './directive/sort.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    OrderComponent,
    OrderFilterPipe,
    ListAddComponent,
    ListUpdateComponent,
    HeaderComponent,
    SortDirective
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
