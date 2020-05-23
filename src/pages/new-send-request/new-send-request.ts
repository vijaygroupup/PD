import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, ToastController,MenuController, ActionSheetController, AlertController, LoadingController } from 'ionic-angular';
import { NewSendRequest2Page } from '../new-send-request2/new-send-request2';
import { DashPage } from '../dash/dash';
import { HomePage } from '../home/home';

declare var google;
@Component({
  selector: 'page-new-send-request',
  templateUrl: 'new-send-request.html',
})
export class NewSendRequestPage {
  hideFav:any;
  hideForScan:any;
  showRegister:any;
  constructor(public loadingController: LoadingController,public menuCtrl:MenuController, public alert: AlertController, public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public toastController: ToastController, public navParams: NavParams,  private zone: NgZone) {
  this.hideFav=true;
  this.hideForScan=true;
  this.showRegister=true;
  }

  ionViewDidLoad() {

  }

 
  presentToast(params) {
    let toast = this.toastController.create({
      message: params,
      duration: 3000
    });
    toast.present();
  }
  submitSenderRequest() {
    this.navCtrl.push(NewSendRequest2Page);
  }
  updateToSearchResults(){

  }
  selectToSearchResult(a){

  }
  goToFav(){
    this.navCtrl.setRoot(NewSendRequestPage);
  }
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }
  goToHelp(){
    this.navCtrl.setRoot(DashPage);
  }
}