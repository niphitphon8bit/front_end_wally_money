import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerNamePageRoutingModule } from './customer-name-routing.module';

import { CustomerNamePage } from './customer-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerNamePageRoutingModule
  ],
  declarations: [CustomerNamePage]
})
export class CustomerNamePageModule {}
