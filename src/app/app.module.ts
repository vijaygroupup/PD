import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';  
import { HomePage } from '../pages/home/home';
import { CnfrmPage } from '../pages/cnfrm/cnfrm';
import { DashPage } from '../pages/dash/dash';
import { SenderPage } from '../pages/sender/sender';
import { UserupdatePage } from '../pages/userupdate/userupdate';
import { NewSendRequestPage } from '../pages/new-send-request/new-send-request';
import { NewSendRequest2Page } from '../pages/new-send-request2/new-send-request2';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SenderPage,
    CnfrmPage,
    DashPage,
    NewSendRequestPage,
    UserupdatePage,
    NewSendRequest2Page
  ],
  imports: [
    BrowserModule,
     IonicModule.forRoot(MyApp),
       BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CnfrmPage,
    SenderPage,
    DashPage,
    NewSendRequestPage,
    UserupdatePage,
    NewSendRequest2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
   ]
})
export class AppModule { }
