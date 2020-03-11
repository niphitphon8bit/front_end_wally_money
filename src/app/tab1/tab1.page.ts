import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  doughnutChartLabels = ['รายรับ', 'รายจ่าย'];
  doughnutChartData = [10000,5000];
  doughnutChartType = 'doughnut';
  donutOptions: any = {
      legend: {
        display: false,
        position: 'right'
      }
    };
}

