import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransactionInsertPageRoutingModule } from './transaction-insert-routing.module';

import { TransactionInsertPage } from './transaction-insert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransactionInsertPageRoutingModule
  ],
  declarations: [TransactionInsertPage]
})
export class TransactionInsertPageModule {}
