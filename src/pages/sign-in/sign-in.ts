import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the SignInPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {

  constructor(public navCtrl: NavController, private camera: Camera) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPage');
  }

}
