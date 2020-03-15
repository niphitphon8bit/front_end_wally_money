import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  doughnutChartLabels = ['รายรับ', 'รายจ่าย'];
  doughnutChartData = [3,5];
  doughnutChartType = 'pie';
  donutOptions: any = {
      legend: {
        display: false,
        position: 'right'
      },
      pieceLabel: {
        render: 'value',  // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
        fontSize: 10,
        fontStyle: 'bold',
        fontColor: '#FFF',
      },
    };
}

