import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav, AlertController, LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { NewSendRequestPage } from '../new-send-request/new-send-request';

import { SenderPage } from '../sender/sender';
import { ActionSheetController } from 'ionic-angular';
@Component({
  selector: 'page-new-send-request2',
  templateUrl: 'new-send-request2.html',
})
export class NewSendRequest2Page {
  constructor(public loadingController: LoadingController, public alertCtrl: AlertController, public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {

  }
  displayAlert(message) {
    var alert = this.alertCtrl.create({
      message: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }
  postSenderRequest() {
    this.presentActionSheet();
  }

  presentActionSheet() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Your package is in Queue.',
      cssClass: 'action-sheets',
      buttons: [
        {
          text: 'Send Another Pacakge',
          role: 'destructive',
          icon: 'send',
          handler: () => {
            this.NAVIGATE(NewSendRequestPage);
            return true;
          }
        }, {
          text: 'Check Status',
          icon: 'open',
          handler: () => {
            this.NAVIGATE(SenderPage);
            return true;
          }
        }, {
          text: 'Save this as favorites',
          icon: 'add',
          handler: () => {
            return true;
          }
        }
      ]
    });
    actionSheet.present();
  }
  goToFav(){
    this.navCtrl.setRoot(NewSendRequestPage);
  }
 
  NAVIGATE(page) {
    this.navCtrl.setRoot(page);
  }
}