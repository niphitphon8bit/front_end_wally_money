import { Tab1Page } from './tab1/tab1.page';
import { Tab3Page } from './tab3/tab3.page';
import { AccountPage } from './account/account.page';
import { Account, Transaction, Transaction_entertain, Transaction_default, Transaction_food } from './Pattern';
import { MainMenuPage } from './main-menu/main-menu.page';
import { TransactionInsertPage } from './transaction-insert/transaction-insert.page';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Http, HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomePage } from './homepage/homepage.page';
import { AccountEditPage } from './account-edit/account-edit.page';

@NgModule({
  declarations: [
    AppComponent,
    TransactionInsertPage,
    AccountEditPage,
  ],
  entryComponents: [
    TransactionInsertPage,
    AccountEditPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      backButtonText: 'ย้อนกลับ'
    }),
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },
    MainMenuPage,
    HomePage,
    Account,
    AccountPage,
    Transaction_entertain,
    Transaction_default,
    Transaction_food,
    Tab3Page,
    AccountEditPage,
    Tab1Page


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
