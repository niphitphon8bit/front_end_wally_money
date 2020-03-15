import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, BooleanValueAccessor } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';



@Component({
  selector: 'app-customer-name',
  templateUrl: './customer-name.page.html',
  styleUrls: ['./customer-name.page.scss'],
})
export class CustomerNamePage implements OnInit {

  private username: string
  private password: string
  private user: any

  constructor(
    public navCtrl: NavController,
    private router: Router

  ) {

  }

  ngOnInit() {
  }

  clickmain() {
    let navigationExtras: NavigationExtras = {
      state: {
        username: this.username,
        password: this.password
      }
    };
    console.log(navigationExtras)
    this.router.navigate(['main_tab'], navigationExtras);

  }

}
