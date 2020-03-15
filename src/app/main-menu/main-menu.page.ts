import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../service/transaction.service';
// import { NumberValueAccessor } from '@angular/forms';

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
  ) {

   }
  public ac_fname: string;
  public ac_lname: string;
  public full_name : string;
  public ac_balance: any = 1000;
  public max_cost: any;
  public transaction : any = [];
  public records: any = [
    {
      ts_id: 1,
      ts_name: "ค่าขนมจ้าาาาาาาาาาาาาาาาาาาาาาาาาาาาาา",
      ts_cost: 2125,
      ts_time: "23:08:46",
      ts_category: 'R',
    },
    {
      ts_id: 2,
      ts_name: "ค่าเสื้อ",
      ts_cost: 3230,
      ts_time: "23:08:46",
      ts_category: 'E',
    },
    {
      ts_id: 3,
      ts_name: "แม่ให้",
      ts_cost: 350,
      ts_time: "23:08:46",
      ts_category: 'R',
    },
    {
      ts_id: 4,
      ts_name: "แม่ขอ",
      ts_cost: 4000,
      ts_time: "21:08:46",
      ts_category: 'E',
    },
    {
      ts_id: 5,
      ts_name: "แม่ยืม",
      ts_cost: 45000098,
      ts_time: "20:08:46",
      ts_category: 'E',
    },
  ];

  ngOnInit() {
    this.records.forEach(element => {
      element.ts_cost = element.ts_cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    });
    this.ac_balance = this.ac_balance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    this.ac_fname = "Niphitphon";
    this.ac_lname = "Thanatkulkit";
    this.full_name = `${this.ac_lname} ${this.ac_fname[0]}.`;
    // this.get_transaction();
  }

  ionViewWillEnter(){
    console.log("enter");
    this.get_transaction();
  }

  get_transaction(){
    this.transaction = [];
    this.TransactionService.get_all_transaction().subscribe((res) =>{
      res.forEach(element => {
        this.transaction.push({
          ts_id: element.ts_id,
          ts_name: element.ts_name,
          ts_cost: element.ts_cost,
          ts_detail: element.ts_detail,
          ts_category: element.ts_category,
          ts_time: element.ts_date
        })
      })
    })
    console.log(this.transaction);
  }

  public formatDate(date) {
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

}


// ngOnInit(){

// }

// class Account {
//   fname: string;
//   lname: string;
//   max_cost: number;
//   record: Record[];
// }

// class Record {
//   balance: number;
//   date: Date;

// }

interface Transaction {

  //   private name: string;
  //   private cost: number;
  //   private date: Date;
  //   private detail: string;
  //   private type: string;

  //   constructor(){

  // };

  //   set_name(n: string): void;

}

// class Transaction_Revenue implements Transaction {

//   constructor(n : string){
//     this.name = n;
  // }

//   set_name(n : string){

//   }

// }
