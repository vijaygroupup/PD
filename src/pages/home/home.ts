import { Component } from '@angular/core';
import { NavController,NavParams,LoadingController,ToastController } from 'ionic-angular';
import { CnfrmPage } from '../cnfrm/cnfrm';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mobileNumber: any;
  loading:any;
  sendRequestData:any;
  constructor(public toastController: ToastController, public navParams: NavParams,public loadingController:LoadingController,public navCtrl: NavController, private formBuilder: FormBuilder) {
    }
  register() {
    this.navCtrl.push(CnfrmPage);
  }
  presentToast(params) {
    let toast = this.toastController.create({
      message: params,
      duration: 2000
    });
    toast.present();
  }
}
