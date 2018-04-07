import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { HomePage } from '../home/home';
import { ServerProvider } from '../../providers/server/server';
import { CameraRegisterPage } from '../camera-register/camera-register';

@IonicPage()
@Component({
  selector: 'page-verify-pin',
  templateUrl: 'verify-pin.html',
})
export class VerifyPinPage {
  code;
  userData;
  verifyCode;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController, public modalCtrl:ModalController, public server:ServerProvider) {
    this.userData = this.navParams.get('userData');
    this.generateCode();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyPinPage');
  }

  generateCode(){
    this.server.verification(this.userData.get('studentPhone')).then((data:any) => {
      if(data.status == 200){
        console.log(data);
        this.textSent();
        this.verifyCode = data.data;
      }else{
        console.log('Error');
      }
    })
  }

  verify(){
    if(this.code == this.verifyCode && this.code != ''){
      this.profilePicture();
    }else{
      this.invalidCode();
    }
  }

  textSent(){
    let alert = this.alertCtrl.create({
      title: 'Text Message Sent',
      subTitle: 'Text message sent to ' + this.userData.get('studentPhone'),
      buttons: ['Dismiss']
    });
    alert.present();
  }

  invalidCode(){
    let alert = this.alertCtrl.create({
      title: 'Invalid Code',
      subTitle: 'Invalid Code. Please try again.',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  backButton(){
    this.navCtrl.pop();
  }

  loginButton(){
    this.navCtrl.push(HomePage);
  }

  profilePicture(){
    this.navCtrl.push(CameraRegisterPage, {userData : this.userData})
  }
}
