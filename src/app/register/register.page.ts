import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public username: string;
  public password: string;
  public password2 : string;

  public slideOneForm: FormGroup;
  //private validators:Validators;
  
  constructor(
    public navCtrl: NavController,
    private formBuilder:FormBuilder,
    private router: Router
    
    ) { 
      
       this.slideOneForm = this.formBuilder.group({
         firstName: ['', Validators.compose([
           Validators.required
         ])],
         password: ['', Validators.compose([
           Validators.required
         ])],
         password2: ['', Validators.compose ([
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
      password2: this.password2
    }
  };
  console.log(navigationExtras)

if(this.password != this.password2){
  alert("PassWord ไม่ตรงกัน");

}else{
  this.router.navigate(['login'], navigationExtras);
}

}


}
