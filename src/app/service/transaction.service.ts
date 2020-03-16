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


  transaction_insert(name_th: string, name_en: string) {
    let data = {
      "dev_name_th": name_th,
      "dev_name_en": name_en,
      "dev_status": "Y",
      "dev_user_update": "55"
    }
    return this.http.post(this.url + "/dev", data).map((res) => res.json());
  }

  get_transaction_by_account_id(ac_id) {
    return this.http.get(`http://localhost:3000/get_transaction_by_key/${ac_id}`).map((res) => res.json());

  }
  get_transaction_this_day() {
    let data = {
      "ts_ac_id": 2,
      "ts_day": new Date().getDate()
    }
    console.log(data)
    return this.http.post(`http://localhost:3000/get_transaction_this_day`, data).map((res) => res.json());

  }
  get_transaction_this_month() {
    let data = {
      "ts_ac_id": 2,
      "ts_month": new Date().getMonth() + 1
    }
    console.log(data)
    return this.http.post(`http://localhost:3000/get_transaction_this_month`, data).map((res) => res.json());

  }

}
