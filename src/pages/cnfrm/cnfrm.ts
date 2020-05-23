import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,ToastController } from 'ionic-angular';
import { UserupdatePage } from '../userupdate/userupdate';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-list',
  templateUrl: 'cnfrm.html'
})
export class CnfrmPage {
  mobileNumber: any;
  otp: String;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  cnfrmForm: FormGroup;
   constructor(public toastController: ToastController,public loadingController:LoadingController,public navCtrl: NavController, private formBuilder: FormBuilder, public navParams: NavParams) {
   }
  confirm() {
    this.navCtrl.push(UserupdatePage);
  }
  resend() {

    }
  }
