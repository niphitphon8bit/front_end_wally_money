import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public navCtrl: NavController,
    private formBuilder:FormBuilder
    ) { }

  ngOnInit() {
//     this.form = this.formBuilder.group({
// 'name':[null,Validators.compose([
//   Validators.required
// ])]

//     })
  }
  
onclick(){
this.navCtrl.navigateForward('login');
}
}
