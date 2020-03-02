import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  doughnutChartLabels = ['ครอบครัว', 'เงินเดือน', 'รายจ่ายส่วนตัว'];
  doughnutChartData = [350, 450, 100];
  doughnutChartType = 'doughnut';
  donutOptions: any = {
      legend: {
        display: false,
        position: 'right'
      }
    };
}

