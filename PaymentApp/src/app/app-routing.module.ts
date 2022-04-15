import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { CardTypeComponent } from './card-type/card-type.component';

const routes : Routes = [
  {path:'cardtype', component:CardTypeComponent}, 
  {path:'paymentdetails', component:PaymentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
