import { Account } from './../Pattern';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, BooleanValueAccessor } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AccountService } from '../service/account.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private username: string
  private password: string
  private idaccount: string
  private user: any

  constructor(
    public account: Account,
    public navCtrl: NavController,
    private router: Router,
    private accountservice: AccountService
  ) {

  }

  ngOnInit() {
  }

  clickmain() {


    this.accountservice.check_login(this.username, this.password).subscribe((res) => {
      console.log("Hello World")
      // console.log(res[0].ac_id)
      if (this.username != null) {
        let navigationExtras: NavigationExtras = {
          state: {
            ac_id: res[0].ac_id,
            ac_username: res[0].ac_username,
            ac_password: res[0].ac_password,
            ac_fname: res[0].ac_fname,
            ac_lname: res[0].ac_lname
          }
        };
        console.log(navigationExtras)
        this.router.navigate(['main_tab'], navigationExtras);
      } else {
        alert("ไม่พบข้อมูลในระบบ");

      }
    })



  }

}
