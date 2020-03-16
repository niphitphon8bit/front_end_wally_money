import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CurrencyPipe } from '@angular/common';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {TransactionService} from '../service/transaction.service';
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
    private TransactionService:TransactionService,
    private MainMenuPage : MainMenuPage,
    public navCtrl: NavController, private httpClient: HttpClient){
    this.loadUsers();
  }
  public history_type: string;
  public transaction_by_account : any = [];
  users = [];
  page = 0;
  maximumPages = 3;


  loadUsers(event?){
    this.httpClient.get(`https://randomuser.me/api/?results=20&page=${this.page}`)
  .subscribe(res=>{
    console.log(res);
    this.users = this.users.concat(res['result']);

    if (event) {
      event.complete();
    }
   });
  }
  loadMore(event){
    console.log(event);
    this.page++;
    this.loadUsers(event);
    if(this.page === this.maximumPages){
      event.enable(false);
    }
  }

  ionViewWillEnter(){
    console.log("enter");
    this.get_transaction_by_account();
  }

  get_transaction_by_account(){
    this.transaction_by_account = [];
    this.TransactionService.get_transaction_by_account_id().subscribe((res) =>{
      res.forEach(element => {
        this.transaction_by_account.push({
          ts_id: element.ts_id,
          ts_name: element.ts_name,
          ts_cost: element.ts_cost,
          ts_detail: element.ts_detail,
          ts_category: element.ts_category,
          ts_date: this.MainMenuPage.formatDate(element.ts_date.substr(0,9))

        })
      })
    })
    console.log(this.transaction_by_account);
  }










  public transactions2: any = [
    {
      ts_id: 1,
      ts_name: "ซื้อยาสระผม",
      ts_cost: 129,
      ts_date: "12/3/2563",
      ts_time: "22:08:46",
      ts_category: 'E',
      ts_detail: "จ่ายค่ายาสระผม",
      ts_transaction_type: "ค่าใช้จ่ายทั่วไป"
    },
    {
      ts_id: 2,
      ts_name: "ซื้อเสื้อผ้า",
      ts_cost: 600,
      ts_date: "12/3/2563",
      ts_time: "22:08:46",
      ts_category: 'E',
      ts_detail: "จ่ายเงินค่าเสื้อผ้า",
      ts_transaction_type: "รายจ่ายประจำ"
    },
    {
      ts_id: 3,
      ts_name: "ได้รับเงินเดือน",
      ts_cost: 8000,
      ts_date: "12/3/2563",
      ts_time: "22:08:46",
      ts_category: 'R',
      ts_detail: "ได้รับเงินเดือน",
      ts_transaction_type: "รายรับประจำ"
    },
    {
      ts_id: 4,
      ts_name: "ซื้อของฝาก",
      ts_cost: 690,
      ts_date: "12/3/2563",
      ts_time: "23:08:46",
      ts_category: 'E',
      ts_detail: "ซื้อของฝากครบครัว",
      ts_transaction_type: "ครอบครัว"
    },
    {
      ts_id: 5,
      ts_name: "กินอาหาร",
      ts_cost: 1025,
      ts_date: "12/3/2563",
      ts_time: "23:08:46",
      ts_category: 'E',
      ts_detail: "ไปรับประทานอาหารที่ภัตคาร",
      ts_transaction_type: "อาหาร/เครื่องดื่ม"
    },
    {
      ts_id: 6,
      ts_name: "ซื้อตั๋วหนัง",
      ts_cost: 150,
      ts_date: "12/3/2563",
      ts_time: "23:08:46",
      ts_category: 'E',
      ts_detail: "ซื้อตั๋วหนังออนไลน์",
      ts_transaction_type: "บันเทิง"
    },
    {
      ts_id: 7,
      ts_name: "ค่าท่องเที่ยว",
      ts_cost: 6025,
      ts_date: "12/3/2563",
      ts_time: "24:08:46",
      ts_category: 'E',
      ts_detail: "เที่ยวต่างประเทศ",
      ts_transaction_type: "เที่ยว"
    },
    {
      ts_id: 8,
      ts_name: "ทำงานพิเศษ",
      ts_cost: 3200,
      ts_date: "12/3/2563",
      ts_time: "24:08:46",
      ts_category: 'R',
      ts_detail: "รายได้จากการทำงานพิเศษ",
      ts_transaction_type: "รายได้เสริม"
    },
    {
      ts_id: 9,
      ts_name: "ชำระบิลค่าน้ำ",
      ts_cost: 1290,
      ts_date: "12/3/2563",
      ts_time: "24:08:46",
      ts_category: 'R',
      ts_detail: "ชำระบิลค่าน้ำออนไลน์",
      ts_transaction_type: "ชำระบิล"
    },
    {
      ts_id: 10,
      ts_name: "โอนเงินบริจาค",
      ts_cost: 18900,
      ts_date: "12/3/2563",
      ts_time: "24:08:46",
      ts_category: 'R',
      ts_detail: "บริจาคเงินค่าหน้ากากเพื่อประเทศไทย",
      ts_transaction_type: "อื่นๆ"
    }
  ];
  public transactions: any = [
    {
      ts_id: 1,
      ts_name: "ซื้อยาสระผม",
      ts_cost: 129,
      ts_date: "11/3/2563",
      ts_time: "22:08:46",
      ts_category: 'E',
      ts_detail: "จ่ายค่ายาสระผม",
      ts_transaction_type: "ค่าใช้จ่ายทั่วไป"
    },
    {
      ts_id: 2,
      ts_name: "ซื้อเสื้อผ้า",
      ts_cost: 600,
      ts_date: "11/3/2563",
      ts_time: "22:08:46",
      ts_category: 'E',
      ts_detail: "จ่ายเงินค่าเสื้อผ้า",
      ts_transaction_type: "รายจ่ายประจำ"
    },
    {
      ts_id: 3,
      ts_name: "ได้รับเงินเดือน",
      ts_cost: 8000,
      ts_date: "11/3/2563",
      ts_time: "22:08:46",
      ts_category: 'R',
      ts_detail: "ได้รับเงินเดือน",
      ts_transaction_type: "รายรับประจำ"
    },
    {
      ts_id: 4,
      ts_name: "ซื้อของฝาก",
      ts_cost: 690,
      ts_date: "11/3/2563",
      ts_time: "23:08:46",
      ts_category: 'E',
      ts_detail: "ซื้อของฝากครบครัว",
      ts_transaction_type: "ครอบครัว"
    },
    {
      ts_id: 5,
      ts_name: "กินอาหาร",
      ts_cost: 1025,
      ts_date: "11/3/2563",
      ts_time: "23:08:46",
      ts_category: 'E',
      ts_detail: "ไปรับประทานอาหารที่ภัตคาร",
      ts_transaction_type: "อาหาร/เครื่องดื่ม"
    },
    {
      ts_id: 6,
      ts_name: "ซื้อตั๋วหนัง",
      ts_cost: 150,
      ts_date: "11/3/2563",
      ts_time: "23:08:46",
      ts_category: 'E',
      ts_detail: "ซื้อตั๋วหนังออนไลน์",
      ts_transaction_type: "บันเทิง"
    },
    {
      ts_id: 7,
      ts_name: "ค่าท่องเที่ยว",
      ts_cost: 6025,
      ts_date: "11/3/2563",
      ts_time: "24:08:46",
      ts_category: 'E',
      ts_detail: "เที่ยวต่างประเทศ",
      ts_transaction_type: "เที่ยว"
    },
    {
      ts_id: 8,
      ts_name: "ทำงานพิเศษ",
      ts_cost: 3200,
      ts_date: "11/3/2563",
      ts_time: "24:08:46",
      ts_category: 'R',
      ts_detail: "รายได้จากการทำงานพิเศษ",
      ts_transaction_type: "รายได้เสริม"
    },
    {
      ts_id: 9,
      ts_name: "ชำระบิลค่าน้ำ",
      ts_cost: 1290,
      ts_date: "11/3/2563",
      ts_time: "24:08:46",
      ts_category: 'R',
      ts_detail: "ชำระบิลค่าน้ำออนไลน์",
      ts_transaction_type: "ชำระบิล"
    },
    {
      ts_id: 10,
      ts_name: "โอนเงินบริจาค",
      ts_cost: 18900,
      ts_date: "11/3/2563",
      ts_time: "24:08:46",
      ts_category: 'R',
      ts_detail: "บริจาคเงินค่าหน้ากากเพื่อประเทศไทย",
      ts_transaction_type: "อื่นๆ"
    }
  ];
  public transactions3: any = [
    {
      ts_id: 1,
      ts_name: "ซื้อยาสระผม",
      ts_cost: 129,
      ts_date: "12/3/2563",
      ts_time: "22:08:46",
      ts_category: 'E',
      ts_detail: "จ่ายค่ายาสระผม",
      ts_transaction_type: "ค่าใช้จ่ายทั่วไป"
    },
    {
      ts_id: 2,
      ts_name: "ซื้อเสื้อผ้า",
      ts_cost: 600,
      ts_date: "12/3/2563",
      ts_time: "22:08:46",
      ts_category: 'E',
      ts_detail: "จ่ายเงินค่าเสื้อผ้า",
      ts_transaction_type: "รายจ่ายประจำ"
    },
    {
      ts_id: 3,
      ts_name: "ได้รับเงินเดือน",
      ts_cost: 8000,
      ts_date: "12/3/2563",
      ts_time: "22:08:46",
      ts_category: 'R',
      ts_detail: "ได้รับเงินเดือน",
      ts_transaction_type: "รายรับประจำ"
    },
    {
      ts_id: 4,
      ts_name: "ซื้อของฝาก",
      ts_cost: 690,
      ts_date: "13/3/2563",
      ts_time: "23:08:46",
      ts_category: 'E',
      ts_detail: "ซื้อของฝากครบครัว",
      ts_transaction_type: "ครอบครัว"
    },
    {
      ts_id: 5,
      ts_name: "กินอาหาร",
      ts_cost: 1025,
      ts_date: "13/3/2563",
      ts_time: "23:08:46",
      ts_category: 'E',
      ts_detail: "ไปรับประทานอาหารที่ภัตคาร",
      ts_transaction_type: "อาหาร/เครื่องดื่ม"
    },
    {
      ts_id: 6,
      ts_name: "ซื้อตั๋วหนัง",
      ts_cost: 150,
      ts_date: "14/3/2563",
      ts_time: "23:08:46",
      ts_category: 'E',
      ts_detail: "ซื้อตั๋วหนังออนไลน์",
      ts_transaction_type: "บันเทิง"
    },
    {
      ts_id: 7,
      ts_name: "ค่าท่องเที่ยว",
      ts_cost: 6025,
      ts_date: "14/3/2563",
      ts_time: "24:08:46",
      ts_category: 'E',
      ts_detail: "เที่ยวต่างประเทศ",
      ts_transaction_type: "เที่ยว"
    },
    {
      ts_id: 8,
      ts_name: "ทำงานพิเศษ",
      ts_cost: 3200,
      ts_date: "11/3/2563",
      ts_time: "24:08:46",
      ts_category: 'R',
      ts_detail: "รายได้จากการทำงานพิเศษ",
      ts_transaction_type: "รายได้เสริม"
    },
    {
      ts_id: 9,
      ts_name: "ชำระบิลค่าน้ำ",
      ts_cost: 1290,
      ts_date: "11/3/2563",
      ts_time: "24:08:46",
      ts_category: 'R',
      ts_detail: "ชำระบิลค่าน้ำออนไลน์",
      ts_transaction_type: "ชำระบิล"
    },
    {
      ts_id: 10,
      ts_name: "โอนเงินบริจาค",
      ts_cost: 18900,
      ts_date: "11/3/2563",
      ts_time: "24:08:46",
      ts_category: 'R',
      ts_detail: "บริจาคเงินค่าหน้ากากเพื่อประเทศไทย",
      ts_transaction_type: "อื่นๆ"
    }
  ];
  
  public segmentChanged(ev: any) {
    if (this.history_type == "day") {
      console.log('Segment changed', ev);
      this.history_type = "month";

    } else {
      console.log('Segment changed', ev);

      this.history_type = "day"
    }
    console.log(this.history_type);
  }
  ngOnInit() {
    this.history_type = "day";
  }

  
}