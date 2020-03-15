import { TransactionInsertPage } from './../transaction-insert/transaction-insert.page';
import { Component, OnInit, } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  data: any;

  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log("hello")
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
      console.log(this.data)
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {

  }



  async transaction_insert() {
    const modal = await this.modalController.create({
      component: TransactionInsertPage
    })

    modal.onDidDismiss().then((status) => {

      if (status != null) {
        console.log(status);
      }
    });
    return await modal.present()
  }

}
