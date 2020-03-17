import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from './../Pattern';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {


  private ac_username: string
  private ac_password: string
  private ac_fname: string
  private ac_lname: string
  constructor(
    public account: Account,
    private accountservice: AccountService,
  ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("enter account page")
    this.ac_fname = this.account.get_ac_fname();
    this.ac_lname = this.account.get_ac_lname();
    this.ac_username = this.account.get_ac_username();
    this.ac_password = this.account.get_ac_password();
  }



  set_account(account: Account) {
    this.account.set_value(account.get_ac_id(), account.get_ac_fname(), account.get_ac_lname(), account.get_ac_username(), account.get_ac_password())
  }

}
