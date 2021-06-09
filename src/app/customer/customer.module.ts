import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
console.log("customer module.........!")
@NgModule({
  declarations: [LoginComponent, ListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
