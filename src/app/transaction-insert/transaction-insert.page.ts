import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transaction-insert',
  templateUrl: './transaction-insert.page.html',
  styleUrls: ['./transaction-insert.page.scss'],
})
export class TransactionInsertPage implements OnInit {

  public Date: any = new Date();
  public starting_date: any = this.Date.getMonth() + 1 + '/' + this.Date.getDate() + '/' + (this.Date.getFullYear());
  public current_time: any = this.Date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });

  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  public closeModal() {
    this.modalCtrl.dismiss("close");
  }

}
