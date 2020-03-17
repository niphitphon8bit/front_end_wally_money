import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AccountService } from '../service/account.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public username: string;
  public password: string;
  public password2: string;
  public fname:string;
  public lname:string;
  public slideOneForm: FormGroup;
  //private validators:Validators;

  constructor(
    public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private router: Router,
    private accountservice: AccountService,
    private httpclient: HttpClient

  ) {

    this.slideOneForm = this.formBuilder.group({
      firstName: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
      password2: ['', Validators.compose([
        Validators.required
      ])]
    });



  }

  ngOnInit() {

  }



  clickmain() {
    let navigationExtras: NavigationExtras = {
      state: {
        username: this.username,
        password: this.password,
        password2: this.password2,
        fname:this.fname,
        lname:this.lname
      }
    };
    console.log(navigationExtras)

    if (this.password != this.password2) {
      alert("กรุณากรอก Password ให้ตรงกัน");

    } else {
      this.accountservice.regisCheck(this.username).subscribe((res) => {
        console.log(res)
        if (res.length == 0) {
          this.account_insert(event);
          this.router.navigate(['login'], navigationExtras);
        } else {
          alert("username ซ้ำกันในระบบ");
        }

      })



    }

  }


  account_insert(event?) {
    this.accountservice.account_insert(this.username, this.password,this.fname, this.lname).subscribe((res) => {
      console.log(res)
    })


  }


}
