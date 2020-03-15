import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController , NavController} from '@ionic/angular';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transaction-insert',
  templateUrl: './transaction-insert.page.html',
  styleUrls: ['./transaction-insert.page.scss'],
})
export class TransactionInsertPage implements OnInit {

  public Date: any = new Date();
  public date: any = this.Date.getMonth() + 1 + '/' + this.Date.getDate() + '/' + (this.Date.getFullYear());
  public time: any = this.Date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  public ts_name: string;
  public ts_cost: number;
  public ts_date: string;
  public ts_detail: string;
  public ts_category: string;
  public ts_transaction_type: string;



  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    
    this.ts_category = "R";
    this.ts_transaction_type = "1";

  }

  ionViewWillEnter(){
    console.log("insert page");
  }

  ionViewWillLeave(){
    console.log("leaving insert page");
    this.navCtrl.navigateRoot(['/main_tab']);
  }

  public closeModal() {
    this.modalCtrl.dismiss("close");
  }

  public insert_transaction() {
    console.log(this.ts_name,this.ts_cost,this.ts_detail,this.ts_category,this.ts_transaction_type);
    this.ts_date = this.date + " " + this.time;
    this.modalCtrl.dismiss({
      'dismissed': true,
      'date': this.date,
      'time': this.time,
      'ts_name': this.ts_name,
      'ts_transaction_type': this.ts_transaction_type,
      'ts_category': this.ts_category,
      'ts_detail': this.ts_detail,
      'ts_cost': this.ts_cost,
    })
    this.navCtrl.navigateRoot(['/main_tab']);
  }

}
