import { MainMenuPage } from '../main-menu/main-menu.page';
import { TransactionInsertPage } from './../transaction-insert/transaction-insert.page';
import { Component, OnInit, } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  data: any;

  constructor(
    private MainMenuPage: MainMenuPage,
    // private bankAccountRawInput: bankAccountRawInput,
    private modalController: ModalController,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log("hello")
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
      console.log(this.data)
    });
  }

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

  public form_time() {

  }

  public transaction_insert(status) {
    let ts_name = status.data.ts_name
    let ts_cost = status.data.ts_cost
    let ts_date = `${status.data.date} ${status.date.time}`
    let ts_detail = `${status.data.ts_detail}`
    let ts_category = status.data.ts_category
    let ts_ac_id = 5
    let ts_type_id = status.data.ts_transaction_type

  }

}


class Account {
  private ac_fname;
  private ac_lname;
  private ac_username;
  private ac_password;
  private transaction: (transaction_Expend | transaction_Revenue)[];

  // public 
}

abstract class Transaction {

  private ts_name: string;
  private ts_cost: string;
  private ts_date: any;
  private ts_detail: string;
  private ts_category: string;
  private ts_ac_id: any;
  private ts_type_id: any;
  // public abstract factoryMethod(): Product;

  public create_transaction(name,cost,date,detail,ac_id,type_id){
    this.set_ts_name(name);
    this.set_ts_cost(cost);
    this.set_ts_date(date);
    this.set_ts_detail(detail);
    this.set_ts_ac_id(ac_id);
    this.set_ts_type_id(type_id);
    this.set_transaction_category();
  }

  protected set_ts_name(name) {
    this.ts_name = name;
  }

  protected set_ts_cost(cost) {
    this.ts_cost = cost;
  }

  protected set_ts_date(date) {
    this.ts_date = date;
  }

  protected set_ts_detail(detail) {
    this.ts_detail = detail;
  }

  protected set_ts_category(category) {
    this.ts_category = category;
  }

  protected set_ts_ac_id(ac_id) {
    this.ts_ac_id = ac_id;
  }

  protected set_ts_type_id(type_id) {
    this.ts_type_id = type_id;
  }

  protected abstract set_transaction_category(): void;

  

}

class transaction_Revenue extends Transaction {
  
  
  protected set_transaction_category() {
    this.set_ts_category("R");
  }

}

class transaction_Expend extends Transaction {
  protected set_transaction_category() {
    this.set_ts_category("E");
  }
}



interface Transaction_Type_Factory {
  CreateATransactionType(): string;
}

class Transaction_type_A implements Transaction_Type_Factory {
  public name: string;
  public CreateATransactionType(): string {
    return this.name = "A";
  }
}
