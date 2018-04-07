import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import {ServerProvider} from '../../providers/server/server';
import { CameraProvider } from '../../providers/camera/camera';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-camera-register',
  templateUrl: 'camera-register.html',
})
export class CameraRegisterPage {
  userData;

  constructor(public navCtrl: NavController, public navParams: NavParams, public server : ServerProvider, private camera : CameraProvider, private alertCtrl: AlertController) {
  }

  ionViewDidEnter(){
    this.userData = this.navParams.get('userData');
    console.log(this.userData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraRegisterPage');
  }

  cameraButton(){
    this.camera.cameraOpen().then((imageData)=> {
      let image = this.camera.dataURItoBlob(imageData);
      this.userData.set('profilePic', image);
      this.server.registerUser(this.userData).then((data : any)=>{
        if (data.status == 200){
          this.registerSuccesfulPopUp(this.userData.get('name'));
        }else{
          this.errorPopUp(data.status, data.message.code);
        }
      })
    });
  }

  registerSuccesfulPopUp(name){
    let alert = this.alertCtrl.create({
      title: 'Succesful Sign Up',
      message: 'Succesful sign up for ' + name + '.',
      buttons: [
        {
          text: 'Dismiss',
          role: 'cancel',
          handler: data => {
            this.navCtrl.push(HomePage);
          }
        },
      ]
    });
    alert.present();
  }

  errorPopUp(status, message){
    let alert = this.alertCtrl.create({
      title: 'Error ' + status,
      message: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
