import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup} from '@angular/forms';
import { DashPage } from '../dash/dash';
import { UserUpdateModel } from './userupdate.model'
declare var google;
@Component({
  selector: 'page-userupdate',
  templateUrl: 'userupdate.html',
})
export class UserupdatePage {
  userDetailsForm: FormGroup;
  userUpdateModel: UserUpdateModel;
  constructor(public alertCtrl: AlertController, private zone: NgZone, public loadingController: LoadingController, public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
  }
  ngOnInit() {

  }
  ionViewDidLoad() {
  }
 
  loadHomeData(token) {
    this.navCtrl.setRoot(DashPage);
  }

  userDetailsUpdate(data1) {
    this.navigate(data1);
  }

  displayAlert(message) {
    var alert = this.alertCtrl.create({
      message: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }
 
  navigate(tempToken) {
    this.navCtrl.setRoot(DashPage);
  }
  goToDash(){
    this.navCtrl.setRoot(DashPage);
  }
}
