import { AccountService } from './../service/account.service';
import { Account } from './../Pattern';
import { TransactionService } from './../service/transaction.service';
import { Component, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private item;

  public history_type: string;
  public categoryChartData: any;
  public categoryChartType: any;
  public categoryChartLabels: any;
  public categoryOption: any;

  public transactionChartData: any;
  public transactionChartType: any;
  public transactionChartLabels: any;
  public transactionOption: any;

  public selector_month_year: any = [];

  page = "0"

  constructor(
    private TransactionService: TransactionService,
    private account: Account,
    private AccountService: AccountService
  ) {

  }


  get_selector() {
    this.TransactionService.get_year_month_history_by_ac_id(this.account.get_ac_id()).subscribe((res) => {
      console.log(res);
      this.selector_month_year = [];
      res.forEach(element => {
        this.selector_month_year.push(
          {
            year: element.year,
            month: element.month,
            value: `${new Date(`${element.month}`).toLocaleString("th-TH", { month: "short" })} , ${element.year}`
          }
        );
      });
    })
    console.log(this.selector_month_year)
  }

  set_account(account: Account) {
    this.account.set_value(account.get_ac_id(), account.get_ac_fname(), account.get_ac_lname(), account.get_ac_username(), account.get_ac_password())
    console.log(this.account)// this.full_name = `${this.account.get_ac_fname} ${this.account.get_ac_lname}`
  }

  ngOnInit() {
    this.build_category_chart();
    this.build_transaction_type_chart();
    this.get_selector();
  }

  ionViewWillEnter() {
    this.build_category_chart();
    this.build_transaction_type_chart();
    console.log(this.account);
    this.get_selector();
  }

  build_category_chart() {
    this.chart_category_data();
    this.chart_category_type();
    this.chart_category_label();
    this.chart_category_option();
  }

  chart_category_data() {
    this.transactionChartData = [300, 55];
  }
  chart_category_type() {
    this.transactionChartType = 'doughnut';
  }
  chart_category_label() {
    this.transactionChartLabels = ['รายรับ', 'รายจ่าย'];
  }

  chart_category_option() {
    this.transactionOption = {
      legend: {
        display: false,
        position: 'right'
      },
      pieceLabel: {
        display: true,
        categorynder: 'percentage',  // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
        fontSize: 12,
        fontStyle: 'bold',
        fontColor: '#FFF',
      },
      title: {
        display: true,
        position: 'top',
        text: 'ประเภท รายรับ - รายจ่าย',
        fontSize: 12,
        fontColor: '#000',

      }
    };
  }


  build_transaction_type_chart() {
    this.chart_transaction_type_data();
    this.chart_transaction_type_type();
    this.chart_transaction_type_label();
    this.chart_transaction_type_option();
  }

  chart_transaction_type_data() {
    this.categoryChartData = [100, 55, 60];
  }

  chart_transaction_type_type() {
    this.categoryChartType = 'doughnut';
  }

  chart_transaction_type_label() {
    this.categoryChartLabels = ['บันเทิง', 'รายการทั่วไป', 'อาหาร'];
  }

  chart_transaction_type_option() {
    this.categoryOption = {
      legend: {
        display: false,
        position: 'right'
      },
      pieceLabel: {

        render: 'percentage',  // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
        fontSize: 12,
        fontStyle: 'bold',
        fontColor: '#FFF',
      },
      title: {
        display: true,
        position: 'top',
        text: 'หมู่หมู่รายการ',
        fontSize: 12,
        fontColor: '#000',

      }
    };
  }

  build_chart() {
    console.log(this.account.get_ac_id(), this.item.year, this.item.month);
    this.AccountService.account_get_history(this.account.get_ac_id(), this.item.year, this.item.month).subscribe((res) => {
      console.log(res[0]);
      this.transactionChartData = [res[0].R, res[0].E]
    })
    this.AccountService.account_get_history_transaction_type(this.account.get_ac_id(), this.item.year, this.item.month).subscribe((res) => {
      console.log(res[0]);
      this.categoryChartData = [res[0].entertain, res[0].general, res[0].food]
    })
  }
}

