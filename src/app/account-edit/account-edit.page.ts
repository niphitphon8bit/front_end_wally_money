import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../service/account.service';

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
    private AccountService: AccountService,
  ) { }

  

  success(){
  this.AccountService.update_account(this.ac_id,this.ac_fname,this.ac_lname).subscribe((res) => {
    console.log(res)
  })
}


  ngOnInit() {
  }

}



