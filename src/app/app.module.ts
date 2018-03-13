import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavParams } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {Camera} from '@ionic-native/camera';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RegisterPage} from '../pages/register/register';
import {SignInPage} from '../pages/sign-in/sign-in';
import {LogoutPage} from '../pages/logout/logout';
import {CameraRegisterPage} from '../pages/camera-register/camera-register'
import { ServerProvider } from '../providers/server/server';
import { Http , HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    SignInPage,
    LogoutPage,
    CameraRegisterPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    SignInPage,
    LogoutPage,
    CameraRegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServerProvider, 
    Http,
    HttpClientModule,
    HttpClient
  ]
})
export class AppModule {}
