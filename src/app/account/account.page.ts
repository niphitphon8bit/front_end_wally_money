import { Component, OnInit } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Account } from './../Pattern';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AccountEditPage } from './../account-edit/account-edit.page';

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
  private ac_id:string
  
  constructor(
    public account: Account,
    private accountservice: AccountService,
    private router: Router,
    public modalController: ModalController,
    ){

    }
 

  ngOnInit() {
  }

  ionViewWillEnter() {
    console.log("enter account page")
    this.ac_fname = this.account.get_ac_fname();
    this.ac_lname = this.account.get_ac_lname();
    this.ac_username = this.account.get_ac_username();
    this.ac_password = this.account.get_ac_password();
    this.ac_id = this.account.get_ac_id();
  }



  set_account(account: Account) {
    this.account.set_value(account.get_ac_id(), account.get_ac_fname(), account.get_ac_lname(), account.get_ac_username(), account.get_ac_password())
  }
  sign_out(){
    this.router.navigate(['login']);
  }
 
  async edit_account() {

    const modal = await this.modalController.create({
      component: AccountEditPage,
      componentProps: {
        'ac_fname': this.ac_fname,
        'ac_lname': this.ac_lname,
        'ac_username': this.ac_username,
        'ac_password': this.ac_password,
        'ac_id': this.ac_id,
      }

    });
    

     modal.onDidDismiss().then((status) => {
      if(status != null){
        
      }
    });
    return await modal.present()
  }
}