import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { CameraRegisterPage } from '../pages/camera-register/camera-register'
import { ServerProvider } from '../providers/server/server';
import { Http , HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CameraProvider } from '../providers/camera/camera';
import { VerifyPinPage } from '../pages/verify-pin/verify-pin';
import { ConfirmPage } from '../pages/confirm/confirm';
import { FaceScannerPage } from '../pages/face-scanner/face-scanner';
import { AlternateLoginPage } from '../pages/alternate-login/alternate-login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    CameraRegisterPage,
    VerifyPinPage,
    FaceScannerPage,
    ConfirmPage,
    AlternateLoginPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    CameraRegisterPage,
    FaceScannerPage,
    VerifyPinPage,
    ConfirmPage,
    AlternateLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider, 
    Http,
    HttpClientModule,
    HttpClient,
    CameraProvider
  ]
})
export class AppModule {}
