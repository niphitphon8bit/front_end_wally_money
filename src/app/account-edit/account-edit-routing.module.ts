import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountEditPage } from './account-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AccountEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountEditPageRoutingModule {}
