import { Component } from '@angular/core';
import { NavController, MenuController, NavParams, ViewController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NewSendRequestPage } from '../new-send-request/new-send-request';
import { Observable } from 'rxjs/Observable';
import { Events } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'page-dash',
  templateUrl: 'dash.html',
})
export class DashPage {

  result: any;
  profilePhotoId: any;
  location: any;
  supportNumber: any;
  loggedIn: boolean = false;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, private ref: ChangeDetectorRef, public _domSanitizer: DomSanitizer, public events: Events, public navParams: NavParams, public toastController: ToastController, private view: ViewController) {
    this.result = {};
    this.profilePhotoId = "assets/imgs/humanalt.jpg";

  }
  ionViewWillEnter() {
   
  }

  ionViewDidLoad() {

  }


  ionViewCanEnter() {
    //this.loadHomeData();

  }
  goToHome() {
    this.navCtrl.setRoot(NewSendRequestPage);
  }
  presentToast(params) {
    let toast = this.toastController.create({
      message: params,
      duration: 2000
    });
    toast.present();
  }
 
iSenderRequest() {
    if (this.loggedIn)
      this.navCtrl.push(NewSendRequestPage)
  };
}


