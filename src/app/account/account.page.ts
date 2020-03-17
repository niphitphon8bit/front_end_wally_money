import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from './../Pattern';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {


  private username: string
  private password: string
  private fname:string
  private lname:string
  public account: Account
  constructor(
    private accountservice: AccountService,
  ) { 

  }

  ngOnInit() {
  }


  set_account(account: Account) {
    this.account.set_value(account.get_ac_id(), account.get_ac_fname(), account.get_ac_lname(), account.get_ac_username(), account.get_ac_password())
    // this.full_name = `${this.account.get_ac_fname} ${this.account.get_ac_lname}`
  }

}
