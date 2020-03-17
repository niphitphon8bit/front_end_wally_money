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

  public history_type: string;
  public categoryChartData: any;
  public categoryChartType: any;
  public categoryChartLabels: any;
  public categoryOption: any;

  page = "0"

  constructor(
    private TransactionService: TransactionService,
    private account: Account
  ) {

  }


  set_account(account: Account) {
    this.account.set_value(account.get_ac_id(), account.get_ac_fname(), account.get_ac_lname(), account.get_ac_username(), account.get_ac_password())
    // this.full_name = `${this.account.get_ac_fname} ${this.account.get_ac_lname}`
  }

  ngOnInit() {
    this.build_category_chart();
  }

  ionViewWillEnter() {
    this.build_category_chart();
  }

  build_category_chart() {
    this.chart_category_data();
    this.chart_category_type();
    this.chart_category_label();
    this.chart_category_option();
  }

  chart_category_data() {
    this.categoryChartData = [300, 55];
  }
  chart_category_type() {
    this.categoryChartType = 'doughnut';
  }
  chart_category_label() {
    this.categoryChartLabels = ['รายรับ', 'รายจ่าย'];
  }

  chart_category_option() {
    this.categoryOption = {
      legend: {
        display: false,
        position: 'right'
      },
      pieceLabel: {
        categorynder: 'percentage',  // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
        fontSize: 12,
        fontStyle: 'bold',
        fontColor: '#FFF',
      },
      title: {
        display: true,
        position: 'top',
        text: 'รายรับ - รายจ่าย',
        fontSize: 12,
      }
    };
  }


  cateChartData = [100, 55, 60];
  cateChartType = 'doughnut';
  cateChartLabels = ['default', 'entertain', 'food'];
  cateOption: any = {
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
      text: 'ประเภทรายรับ - รายจ่าย',
      fontSize: 12,
    }
  };
}

