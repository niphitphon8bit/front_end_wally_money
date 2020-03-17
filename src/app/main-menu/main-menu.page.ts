import { Account, Transaction_food } from './../Pattern';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: 'main-menu.page.html',
  styleUrls: ['main-menu.page.scss'],
  styles: [
    `
    .greenClass { color: green }
    .redClass { color: red }
    `
  ]
})
export class MainMenuPage implements OnInit {

  constructor(
    private TransactionService: TransactionService,
    private account: Account,
  ) {

  }
  public ac_fname: string;
  public ac_lname: string;
  public full_name: string;
  public ac_balance: any = 0;
  public max_cost: any;
  public transactions: any = [];

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("enter main page");
    console.log(this.account)
    this.get_current_balance();
    this.get_ten_transaction();
    this.ac_balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    if (this.account.get_ac_fname() == "") {
      this.full_name = this.account.get_ac_username();
    } else {
      this.full_name = `${this.account.get_ac_fname()} ${this.account.get_ac_lname()}`
    }
  }

  set_account(account: Account) {
    this.account.set_value(account.get_ac_id(), account.get_ac_fname(), account.get_ac_lname(), account.get_ac_username(), account.get_ac_password())
  }

  get_ten_transaction() {
    this.transactions = [];
    this.TransactionService.get_ten_transaction_by_account_id(this.account.get_ac_id()).subscribe((res) => {
      res.forEach(element => {
        let fulldate = new Date(element.ts_date).toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
        console.log(fulldate);
        let date = this.format_date(fulldate);
        let time = this.format_time(fulldate);
        this.transactions.push({
          ts_id: element.ts_id,
          ts_name: element.ts_name,
          ts_cost: element.ts_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
          ts_detail: element.ts_detail,
          ts_category: element.ts_category,
          ts_time: time,
          ts_date: date
        })
      })
    })
    console.log(this.transactions);
  }

  get_current_balance() {
    this.ac_balance = 0;
    this.TransactionService.get_sum_revenue_by_ac_id(this.account.get_ac_id()).subscribe((res) => {
      console.log(res[0].balance);
      this.ac_balance = res[0].balance;
    })
    this.TransactionService.get_sum_expend_by_ac_id(this.account.get_ac_id()).subscribe((res) => {
      console.log(res[0].balance);
      this.ac_balance -= res[0].balance;
    })
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

  public format_time(date) {
    var d = new Date(date),
      Hours = '' + (d.getHours()),
      Minutes = '' + d.getMinutes(),
      second = '' + d.getSeconds();
    // console.log(second);
    if (Hours.length < 2)
      Hours = '0' + Hours;
    if (Minutes.length < 2)
      Minutes = '0' + Minutes;
    if (second.length < 2)
      second = '0' + second;
    return [Hours, Minutes, second].join(':');
  }

}