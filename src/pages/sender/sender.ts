import { Component, NgModule } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { NewSendRequestPage } from '../new-send-request/new-send-request';
import { NewSendRequest2Page } from '../new-send-request2/new-send-request2';
import { DashPage } from '../dash/dash';
@Component({
  selector: 'page-sender',
  templateUrl: 'sender.html',
})
@NgModule({
 
})
export class SenderPage {
  senderFeeds: any;
  packageStatus: string = "ASSIGNED";
  loading: any;
  hideMe: boolean[] = [];
  cancelClicked: boolean[] = [];
  constructor(public loadingController: LoadingController, public alertCtrl: AlertController, public navCtrl: NavController, public toastController: ToastController,  public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }
  //Deliver offers to be included in the feed
  ionViewCanEnter(refresh) {

  }
  loadSenderRequests(ref) {

  }

  createSenderRequest() {
    this.navCtrl.push(NewSendRequestPage);
  }
  showHideDetails(i) {

    if (this.hideMe[i] == false || this.hideMe[i] === undefined) {

      this.hideMe[i] = true;
    }
    else {
      this.hideMe[i] = false;

    }
  }
  goToDash() {
    this.navCtrl.setRoot(DashPage);
  }


  cancelRequestConfirm(requestId, status, i) {

  }

  cancelRequest(requestId, status, i) {
    this.cancelRequestConfirm(requestId, status, i);

  }

  presentToast(params) {
    let toast = this.toastController.create({
      message: params,
      duration: 3000
    });
    toast.present();
  }
  getItems(a){
    
  }
}
