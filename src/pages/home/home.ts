import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { SignInPage } from '../sign-in/sign-in';
import { LogoutPage } from '../logout/logout';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  register = RegisterPage
  signIn = SignInPage
  logout = LogoutPage
 
  constructor(public navCtrl: NavController) {

  }

}
