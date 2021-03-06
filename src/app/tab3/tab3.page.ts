import { Account } from './../Pattern';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CurrencyPipe } from '@angular/common';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { TransactionService } from '../service/transaction.service';
import "rxjs/add/operator/map";
import { MainMenuPage } from '../main-menu/main-menu.page'
import { from } from 'rxjs';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  styles: [
    `
      .greenClass { color: green }
      .redClass { color: red }
    `
  ]

})


export class Tab3Page implements OnInit {

  constructor(
    private TransactionService: TransactionService,
    private MainMenuPage: MainMenuPage,
    private account: Account,
    public navCtrl: NavController, private httpClient: HttpClient) {
    this.loadUsers();
  }
  public history_type: string;
  public transaction_by_month: any = [];
  public transaction_by_history: any = [];
  public transaction_by_day: any = [];
  public transaction_by_account: any = [];
  users = [];
  page = 0;
  maximumPages = 3;

  public Date: any = new Date();
  start_date: any = this.Date.getMonth() + 1 + '/' + this.Date.getDate() + '/' + (this.Date.getFullYear());
  end_date: any = this.Date.getMonth() + 1 + '/' + this.Date.getDate() + '/' + (this.Date.getFullYear());

  loadUsers(event?) {
    this.httpClient.get(`https://randomuser.me/api/?results=20&page=${this.page}`)
      .subscribe(res => {
        console.log(res);
        this.users = this.users.concat(res['result']);

        if (event) {
          event.complete();
        }
      });
  }
  loadMore(event) {
    console.log(event);
    this.page++;
    this.loadUsers(event);
    if (this.page === this.maximumPages) {
      event.enable(false);
    }
  }

  set_account(account: Account) {
    this.account.set_value(account.get_ac_id(), account.get_ac_fname(), account.get_ac_lname(), account.get_ac_username(), account.get_ac_password())
    // this.full_name = `${this.account.get_ac_fname} ${this.account.get_ac_lname}`
  }

  ionViewWillEnter() {
    console.log("enter");
    this.TransactionService.get_transaction_this_day(this.account.get_ac_id()).subscribe((res) => {
      res.forEach(element => {
        let fulldate = new Date(element.ts_date).toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
        this.transaction_by_day = [];
        this.transaction_by_day.push({
          ts_id: element.ts_id,
          ts_name: element.ts_name,
          ts_cost: element.ts_cost,
          ts_detail: element.ts_detail,
          ts_category: element.ts_category,
          ts_date: this.MainMenuPage.format_date(fulldate),
          // ts_date: date,
          ts_time: this.MainMenuPage.format_time(fulldate),
        })
      })
    })
  }

  public get_transaction_history() {
    console.log(this.start_date, this.end_date)
    this.start_date = this.MainMenuPage.format_date(this.start_date);
    this.end_date = this.MainMenuPage.format_date(this.end_date);
    console.log(this.start_date, this.end_date)
    this.transaction_by_history = [];
    this.TransactionService.get_transaction_this_between(this.start_date, this.end_date, this.account.get_ac_id()).subscribe((res) => {
      console.log(res);
      res.forEach(element => {
        let fulldate = new Date(element.ts_date).toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
        this.transaction_by_history.push({
          ts_id: element.ts_id,
          ts_name: element.ts_name,
          ts_cost: element.ts_cost,
          ts_detail: element.ts_detail,
          ts_category: element.ts_category,
          ts_date: this.MainMenuPage.format_date(fulldate),
          // ts_date: date,
          ts_time: this.MainMenuPage.format_time(fulldate),
        })
      })
    })
    console.log(this.transaction_by_history);
    // console.log(this.TransactionService.get_transaction_this_between(this.start_date,this.end_date))
  }
  get_transaction_by_account() {
    this.transaction_by_account = [];
    this.TransactionService.get_all_transaction_by_account_id(this.account.get_ac_id()).subscribe((res) => {
      res.forEach(element => {
        let fulldate = new Date(element.ts_date).toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
        this.transaction_by_account.push({
          ts_id: element.ts_id,
          ts_name: element.ts_name,
          ts_cost: element.ts_cost,
          ts_detail: element.ts_detail,
          ts_category: element.ts_category,
          ts_date: this.MainMenuPage.format_date(fulldate),
          // ts_date: date,
          ts_time: this.MainMenuPage.format_time(fulldate),
        })
      })
    })
    console.log(this.transaction_by_account);
  }

  public segmentChanged(ev: any) {
    console.log(ev.detail.value)
    if (ev.detail.value == "day") {
      this.TransactionService.get_transaction_this_day(this.account.get_ac_id()).subscribe((res) => {
        res.forEach(element => {
          let fulldate = new Date(element.ts_date).toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
          this.transaction_by_day = [];
          this.transaction_by_day.push({
            ts_id: element.ts_id,
            ts_name: element.ts_name,
            ts_cost: element.ts_cost,
            ts_detail: element.ts_detail,
            ts_category: element.ts_category,
            ts_date: this.MainMenuPage.format_date(fulldate),
            // ts_date: date,
            ts_time: this.MainMenuPage.format_time(fulldate),
          })
        })
      })
      console.log(this.transaction_by_month)
      this.history_type = "day"
    } else if (ev.detail.value == "month") {
      this.TransactionService.get_transaction_this_month(this.account.get_ac_id()).subscribe((res) => {
        this.transaction_by_month = [];
        res.forEach(element => {
          let fulldate = new Date(element.ts_date).toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
          this.transaction_by_month.push({
            ts_id: element.ts_id,
            ts_name: element.ts_name,
            ts_cost: element.ts_cost,
            ts_detail: element.ts_detail,
            ts_category: element.ts_category,
            ts_date: this.MainMenuPage.format_date(fulldate),
            // ts_date: date,
            ts_time: this.MainMenuPage.format_time(fulldate),
          })
        })
      })
      console.log(this.transaction_by_month)
      this.history_type = "month"
    } else {
      this.TransactionService.get_transaction_this_between(this.start_date, this.end_date, this.account.get_ac_id()).subscribe((res) => {
        this.transaction_by_history = [];
        res.forEach(element => {
          let fulldate = new Date(element.ts_date).toLocaleString("en-US", { timeZone: "Asia/Bangkok" });
          this.transaction_by_history.push({
            ts_id: element.ts_id,
            ts_name: element.ts_name,
            ts_cost: element.ts_cost,
            ts_detail: element.ts_detail,
            ts_category: element.ts_category,
            ts_date: this.MainMenuPage.format_date(fulldate),
            // ts_date: date,
            ts_time: this.MainMenuPage.format_time(fulldate),
          })
        })
      })
      console.log(this.transaction_by_history)
      this.history_type = "other"
    }
  }

  myHeaderFn(record, recordIndex, records) {

    var date: any = record.ts_date;
    date = new Date(date);
    var month = date.toLocaleString("th", { month: "short" });
    var day = date.getDate();
    var year = date.getFullYear();
    var newDate = month + ' ' + day + ', ' + year

    if (recordIndex == 0) {
      console.log("hello");
      console.log(record);
      console.log(records);
      return newDate;
    }

    let prev = records[recordIndex - 1].ts_date
    let current = record.ts_date

    if (prev != current) {
      return current;
    }

    return null;
  }

  set_format_date() {
    return
  }

  ngOnInit() {
    this.history_type = "day";
  }


}