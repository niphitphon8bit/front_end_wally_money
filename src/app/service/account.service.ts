import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url: string = "http://localhost:3000";

  constructor(
    private http: Http,
  ) { }

  get_all_account() {
    return this.http.get('http://localhost:3000/account').map((res) => res.json());
  }

  get_all_account_by_id(ac_id) {
    return this.http.get(`http://localhost:3000/get_all_account_by_id/${ac_id}`).map((res) => res.json());
  }

  account_insert(ac_username: string, ac_password: string) {
    let data = {
      "ac_username": ac_username,
      "ac_password": ac_password,

    }
    return this.http.post(this.url + "/account_insert", data).map((res) => res.json());
  }


  check_login(ac_username: string, ac_password: string) {
    let data = {
      "ac_username": ac_username,
      "ac_password": ac_password,
    }
    return this.http.post(this.url + "/get_account_login", data).map((res) => res.json());
  }

  regisCheck(ac_username: string) {
    let data = {
      "ac_username": ac_username
    }
    return this.http.post(this.url + "/account_regisCheck", data).map((res) => res.json());
  }

  update_account(ac_id: string, ac_fname: string, ac_lname: string) {
    let data = {
      "ac_fname": ac_fname,
      "ac_lname": ac_lname,
    }
    return this.http.put(this.url + "/account_update/:id" + ac_id, data).map((res) => res.json());
  }

  account_get_history(ts_ac_id,ts_year,ts_month){
    return this.http.get(this.url + `/account_get_history/${ts_ac_id}/${ts_year}/${ts_month}`).map((res) => res.json());
  }

  account_get_history_transaction_type(ts_ac_id,ts_year,ts_month){
    return this.http.get(this.url + `/account_get_history_transaction_type/${ts_ac_id}/${ts_year}/${ts_month}`).map((res) => res.json());
  }

}
