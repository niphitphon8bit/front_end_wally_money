import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private url: string = "http://localhost:3000";

  constructor(
    private http: Http,

  ) { }

  get_all_transaction() {
    return this.http.get(`http://localhost:3000/transaction`).map((res) => res.json());
  }


  transaction_insert(ts_name: any, ts_cost: any, ts_date: any, ts_detail: any, ts_category: any, ts_ac_id: any, ts_type_id: any) {
    let data = {
      "ts_name": ts_name,
      "ts_cost": ts_cost,
      "ts_date": `${ts_date}`,
      "ts_detail": ts_detail,
      "ts_category": ts_category,
      "ts_ac_id": ts_ac_id,
      "ts_type_id": ts_type_id
    }
    return this.http.post(this.url + "/transaction_insert", data).map((res) => res.json());
  }

  get_ten_transaction_by_account_id(ac_id) {
    return this.http.get(`http://localhost:3000/get_ten_transaction_by_ac_id/${ac_id}`).map((res) => res.json());
  }

  get_all_transaction_by_account_id(ac_id) {
    return this.http.get(`http://localhost:3000/get_all_transaction_by_ac_id/${ac_id}`).map((res) => res.json());
  }
  get_transaction_this_day(ts_ac_id) {
    let data = {
      "ts_ac_id": ts_ac_id,
      "ts_day": new Date().getDate()
    }
    console.log(data)
    return this.http.post(`http://localhost:3000/get_transaction_this_day`, data).map((res) => res.json());

  }
  get_transaction_this_month(ts_ac_id) {
    let data = {
      "ts_ac_id": ts_ac_id,
      "ts_month": new Date().getMonth() + 1
    }
    console.log(data)
    return this.http.post(`http://localhost:3000/get_transaction_this_month`, data).map((res) => res.json());
  }
  get_transaction_this_between(date_start:string, end_start:string,ts_ac_id) {
    let data = {
      "ts_ac_id": ts_ac_id,
      "ts_date_start":date_start,
      "ts_date_end":end_start,
      // "ts_month": new Date().getMonth() + 1
    }
    console.log(data)
    return this.http.post(`http://localhost:3000/transaction_get_history_between_date_by_account_key`,data).map((res) => res.json());
  }

  get_sum_revenue_by_ac_id(ts_ac_id){
    return this.http.get(`http://localhost:3000/get_sum_revenue_by_ac_id/${ts_ac_id}`).map((res) => res.json());
  }

  get_sum_expend_by_ac_id(ts_ac_id){
    return this.http.get(`http://localhost:3000/get_sum_expend_by_ac_id/${ts_ac_id}`).map((res) => res.json());
  }

  get_year_month_history_by_ac_id(ts_ac_id){
    return this.http.get(`http://localhost:3000/get_year_month_history_by_ac_id/${ts_ac_id}`).map((res) => res.json());
  }
 

}
