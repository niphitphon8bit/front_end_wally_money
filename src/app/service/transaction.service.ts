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

  get_all_transaction(){
    return this.http.get(`http://localhost:3000/transaction`).map((res) => res.json());
  }


  transaction_insert(name_th:string,name_en:string){
    let data = {
      "dev_name_th": name_th,
      "dev_name_en": name_en,
      "dev_status": "Y",
      "dev_user_update": "55"
    }
    return this.http.post(this.url + "/dev",data).map((res) => res.json());
  }

  get_transaction_by_account_id(){

  }
}
