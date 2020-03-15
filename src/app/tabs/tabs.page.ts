import { MainMenuPage } from '../main-menu/main-menu.page';
import { TransactionInsertPage } from './../transaction-insert/transaction-insert.page';
import { Component, OnInit, } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
    private MainMenuPage: MainMenuPage,
    // private bankAccountRawInput: bankAccountRawInput,
    private modalController: ModalController,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("Enter tab all")
  }



  async modal_transaction() {
    const modal = await this.modalController.create({
      component: TransactionInsertPage
    })

    modal.onDidDismiss().then((status) => {
      this.MainMenuPage.ionViewWillEnter();
      if (status != null) {
        status.data.date = this.format_date(status.data.date);
        console.log(status);
      }
    });
    return await modal.present()
  }

  public format_date(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  public form_time(){

  }

  public transaction_insert(status){
   let ts_name = status.data.ts_name
   let ts_cost = status.data.ts_cost
   let ts_date = `${status.data.date} ${status.date.time}`
   let ts_category = status.data.ts_category
   let ts_ac_id = 5
   let ts_type_id = status.data.ts_transaction_type
   this
  }

}

// interface bankAccountRawInput {
//    amount : number;
//    interestRate : number;
// }
