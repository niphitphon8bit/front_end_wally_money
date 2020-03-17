import { Tab1Page } from './../tab1/tab1.page';
import { TransactionService } from './../service/transaction.service';
import { Tab3Page } from './../tab3/tab3.page';
import { AccountPage } from './../account/account.page';
import { Account } from './../Pattern';
import { MainMenuPage } from '../main-menu/main-menu.page';
import { TransactionInsertPage } from './../transaction-insert/transaction-insert.page';
import { Component, OnInit, ɵConsole, } from '@angular/core';
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
    private modalController: ModalController,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private account: Account,
    private AccountPage: AccountPage,
    private Tab3Page: Tab3Page,
    private TransactionService: TransactionService,
    private Tab1Page : Tab1Page
  ) {
    console.log("hello")
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state;
        this.account.set_value(this.data.ac_id, this.data.ac_fname, this.data.ac_lname, this.data.ac_username, this.data.ac_password);
      }
      console.log(this.data);
      console.log("Hello World", this.account);
    });


  }



  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("Enter tab all")
    this.MainMenuPage.set_account(this.account);
    this.Tab3Page.set_account(this.account);
    this.Tab1Page.set_account(this.account);
    this.AccountPage.set_account(this.account);
  }



  async modal_transaction() {
    const modal = await this.modalController.create({
      component: TransactionInsertPage
    })

    modal.onDidDismiss().then((status) => {
      if (status != null) {
        let ts_date: string;
        status.data.date = this.format_date(status.data.date);
        console.log(status);
        console.log(status.data.time)
        ts_date = status.data.time;
        status.data.time = ts_date;
        this.TransactionService.transaction_insert(
          status.data.ts_name,
          status.data.ts_cost,
          status.data.ts_date,
          status.data.ts_detail,
          status.data.ts_category,
          this.account.get_ac_id(),
          status.data.ts_transaction_type
          ).subscribe((res) => {
          });
        this.MainMenuPage.ionViewWillEnter();
        // this.MainMenuPage.get_all_transaction();
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

}
