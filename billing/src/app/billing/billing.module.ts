import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from '../routes';
import { BillingComponent } from './billing.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(APP_ROUTES),
    BillingComponent
  ]
})
export class BillingModule { }