import { Component, OnInit } from '@angular/core';
//import { NavController } from '@ionic/angular';
//import { AboutPage } from './tabs/tabs.module';

@Component({
  selector: 'app-customer-name',
  templateUrl: './customer-name.page.html',
  styleUrls: ['./customer-name.page.scss'],
})
export class CustomerNamePage implements OnInit {


  private username: string;
  private password: string;


  constructor() { }

  ngOnInit() {
  
  }

//  update_customer() {
 // this.navCtrl.push(AboutPage, 
//    {firstName: name}
 // );
//}


}
