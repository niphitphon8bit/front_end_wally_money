import { Component, OnInit } from '@angular/core';
import { TransactionService } from './../service/transaction.service';
// import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  styles: [
    `
    .greenClass { color: green }
    .redClass { color: red }
    `
  ]
})
export class Tab2Page implements OnInit {
  
  constructor(
    private TransactionService: TransactionService,
  ) {

   }
  public ac_fname: string;
  public ac_lname: string;
  public full_name : string;
  public ac_balance: any = 1000;
  public max_cost: any;
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
    this.get_transaction();
  }

  ionViewWillEnter(){
    this.get_transaction();
  }

  get_transaction(){
    this.TransactionService.get_all_transaction().subscribe((res) =>{
      console.log(res);
    })
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
