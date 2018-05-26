import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CameraProvider } from '../../providers/camera/camera';
import { ServerProvider } from '../../providers/server/server';
import { ConfirmPage } from '../confirm/confirm';

/**
 * Generated class for the FaceScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-face-scanner',
  templateUrl: 'face-scanner.html',
})
export class FaceScannerPage {
  type;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: CameraProvider, private server : ServerProvider, private alertCtrl: AlertController) {
    this.type = this.navParams.get('type');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FaceScannerPage');
  }

  cameraButton(){
    this.camera.cameraOpen().then((imageData)=> {
      let image = this.camera.dataURItoBlob(imageData);
      let formData = new FormData();
      formData.set('scan', image);
      this.server.rekognition(formData).then((data: any)=>{
        if (data.status == 200){
          let info = { 
            userID: data.userID,
            profilePicture: data.profilePhoto,
            name : data.name,
            scanPhoto: data.scanPhoto
          }
          if (this.type == 'signIn'){
            info['type'] ='signIn';
          }else if(this.type == 'signOut'){
            info['type'] ='signOut';
          }
          this.navCtrl.push(ConfirmPage, {info: info});
        }else if(data.status = 400){
          this.errorPopUp(data.status, data.message);
        }else if(data.status = 404){
          this.noMatchPopUp();
        }
      })
    });    
  }

  errorPopUp(status, message){
    let alert = this.alertCtrl.create({
      title: 'Error ' + status,
      message: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  noMatchPopUp(){
    let alert = this.alertCtrl.create({
      title: 'No match Found',
      message: 'Please either take another picture or sign up',
      buttons: ['Dismiss']
    });
    alert.present();
  }

}
