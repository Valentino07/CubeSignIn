import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServerProvider } from '../../providers/server/server';
import { ConfirmPage } from '../confirm/confirm';

@IonicPage()
@Component({
  selector: 'page-alternate-login',
  templateUrl: 'alternate-login.html',
})
export class AlternateLoginPage {
  email;
  type;

  constructor(public navCtrl: NavController, public navParams: NavParams, public server : ServerProvider, public alertCtrl: AlertController) {
    this.type = this.navParams.get('type');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlternateLoginPage');
  }

  verify(){
    this.server.alternateLogIn(this.email).then((data : any)=>{
      if(data.status == 200){
        this.verifyPopUp(data.phoneNumber, data.data, data.userID);
      }else{
        this.errorPopUp(data.status, data.message);
      }
    })
  }

  errorPopUp(status, message){
    let alert = this.alertCtrl.create({
      title: 'Error ' + status,
      message: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }


  verifyPopUp(phoneNumber, pin, userID){
    let alert = this.alertCtrl.create({
      title: 'Verify Pin Sent to Phone Number',
      subTitle: 'Text message sent to ' + phoneNumber,
      inputs: [
        {
          name : 'pin',
          placeholder : 'Enter the pin'
        }
      ],
      buttons: [
        {
          text : 'Confirm',
          handler : data => {
            if (data.pin == pin){
              this.server.alternateConfirm(userID).then((data : any) => {
                if (data.status == 200){
                  let info = {
                    type : this.type,
                    userID : userID,
                    profilePicture : data.profilePhoto,
                    scanPhoto : 'Alternate Login'
                  }
                  this.navCtrl.push(ConfirmPage, {info : info})
                }
              })
            }else{
              this.invalidCode();
            }
          }
        },
        {
          text : 'Resend Pin',
          handler : data => {
            alert.dismiss();
            this.verify();
          }
        },
        {
          text : 'Cancel',
          handler : data => {
            alert.dismiss();
          }
        }
      ]
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

}
