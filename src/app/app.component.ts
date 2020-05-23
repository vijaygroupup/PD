import { Component, ViewChild, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { AlertController, Nav, Platform, Events, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DashPage } from '../pages/dash/dash';
import { SenderPage } from '../pages/sender/sender';
import { NewSendRequestPage } from '../pages/new-send-request/new-send-request';
import { UserupdatePage } from '../pages/userupdate/userupdate';
import { DomSanitizer } from '@angular/platform-browser';
export const NoContentType = 'NoContentType';
export enum ConnectionStatusEnum {
  online,
  offline

}
@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  role: any;
  result: any;
  profilePhotoId: any;
  loading: any;
  pages: Array<{ title: string, component: any, icon: any }>;
  constructor(public loadingController: LoadingController,  public alertCtrl: AlertController, public _domSanitizer: DomSanitizer, public platform: Platform,  public events: Events, public statusBar: StatusBar,  public splashScreen: SplashScreen) {
      this.initializeApp();
  }
  ngOnInit(){
        this.pages = [
        { title: 'Send  your Package', component: NewSendRequestPage, icon: 'ios-cube-outline' },
        { title: 'Track Package Status', component: SenderPage, icon: 'ios-send-outline' },
        { title: 'About and Contact', component: DashPage, icon: 'ios-contact-outline' }
      ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
     
        this.nav.setRoot(DashPage);
      });
  }
 
  navigatePage(page) {
    this.nav.setRoot(page);
  }
  goToProfile() {
    this.nav.setRoot(UserupdatePage);
  }
  openPage(page) {
    this.nav.setRoot(page.component);
  }
}
