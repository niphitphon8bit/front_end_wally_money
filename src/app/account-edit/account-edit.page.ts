import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../service/account.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.page.html',
  styleUrls: ['./account-edit.page.scss'],
})
export class AccountEditPage implements OnInit {

  @Input() ac_id:string;
  @Input() ac_fname:string;
  @Input() ac_lname:string;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private modalCtrl: ModalController,
  ) { }

  

  success(){
    
    console.log (this.ac_id)
  this.accountService.update_account(this.ac_id,this.ac_fname,this.ac_lname).subscribe((res) => {
    console.log(res)
    
  })
  
  this.closeModal()
  
}


closeModal() {
  this.modalCtrl.dismiss("close");
}




  ngOnInit() {
  }

}



