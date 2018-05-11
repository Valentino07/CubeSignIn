import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { FaceScannerPage } from '../face-scanner/face-scanner';
import { ConfirmPage } from '../confirm/confirm';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  constructor(public navCtrl: NavController) {

  }

  registerButton(){
    this.navCtrl.push(RegisterPage);
  }

  signInButton(){
    this.navCtrl.push(FaceScannerPage, {type : 'signIn'});
  }

  signOutButton(){
    this.navCtrl.push(FaceScannerPage, {type : 'signOut'});
  }
}
