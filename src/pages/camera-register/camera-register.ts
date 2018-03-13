import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import {ServerProvider} from '../../providers/server/server';
/**
 * Generated class for the CameraRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera-register',
  templateUrl: 'camera-register.html',
})
export class CameraRegisterPage {
  userData;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public server : ServerProvider) {
  }

  ionViewDidEnter(){
  this.userData = this.navParams.get('userData');
  console.log(this.userData);
  }

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  image;
  cameraButton(){
    this.camera.getPicture(this.options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64:
    this.image = 'data:image/jpeg;base64,' + imageData;
    console.log(this.image);
   }, (err) => {
    // Handle error
   });
  }

  // complete = this.userData + this.image

  // completeCheck(){
  //   if(this.complete.valid == true){
  //     // this.server.verifyNewUser().subscribe( (data:any) => {
  //       this.completeUser();
  //     // })
  //   }
  // }

  // completeUser() {
  //   this.navCtrl.push(ServerProvider, {userData : this.complete});
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraRegisterPage');
  }

}
