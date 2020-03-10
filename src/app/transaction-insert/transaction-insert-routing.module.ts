import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionInsertPage } from './transaction-insert.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionInsertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionInsertPageRoutingModule {}
