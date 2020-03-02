import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-customer-name',
  templateUrl: './customer-name.page.html',
  styleUrls: ['./customer-name.page.scss'],
})
export class CustomerNamePage implements OnInit {

  private name: string ;
  private lastname: string;


  constructor() { }

  ngOnInit() {
  
  }

}
