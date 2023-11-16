import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'payment',
    loadChildren: () => import('../../../payment/src/app/payment/payment.module').then(m => m.PaymentModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('../../../billing/src/app/billing/billing.module').then(m => m.BillingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
