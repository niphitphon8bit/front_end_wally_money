import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerNamePage } from './customer-name.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerNamePageRoutingModule {}
