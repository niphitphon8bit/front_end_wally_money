import { TransactionInsertPage } from './../transaction-insert/transaction-insert.page';
import { Component, OnInit , } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(

    private modalController: ModalController,
    private alertController: AlertController,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
  
  }



  async transaction_insert() {
    const modal = await this.modalController.create({
      component: TransactionInsertPage
    })

    modal.onDidDismiss().then((status) => {
      
      if(status != null){
        console.log(status);
      }
    });
    return await modal.present()
  }

}
