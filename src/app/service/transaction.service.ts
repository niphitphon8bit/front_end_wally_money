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
}
