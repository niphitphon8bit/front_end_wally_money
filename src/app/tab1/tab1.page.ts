import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public history_type: string;

  constructor() {}

  page = "0";
  
  public segmentChanged(ev: any) {
    if (this.history_type == "re") {
      console.log('Segment changed', ev);
      this.history_type = "re";

    } else {
      console.log('Segment changed', ev);

      this.history_type = "cate"
    }
    console.log(this.history_type);
  }
  ngOnInit() {
    this.history_type = "re";
  }

  reChartData = [300,55];
  reChartType = 'doughnut';
  reChartLabels = ['รายรับ','รายจ่าย'];
  reOption: any = {
    legend: {
      display: false,
      position: 'right'
    },
    pieceLabel: {
      render: 'value',  // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
      fontSize: 12,
      fontStyle: 'bold',
      fontColor: '#FFF',
    }
  };


  cateChartData = [100,55,60];
  cateChartType = 'doughnut';
  cateChartLabels = ['default','entertain','food'];
  cateOption: any = {
    legend: {
      display: false,
      position: 'right'
    },
    pieceLabel: {
      render: 'value',  // สามารถเปลี่ยนการตั้งค่าตามต้องการได้ 'value','label','percentage'
      fontSize: 12,
      fontStyle: 'bold',
      fontColor: '#FFF',
    }
  };
}

