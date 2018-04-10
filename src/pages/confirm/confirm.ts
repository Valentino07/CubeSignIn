import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServerProvider } from '../../providers/server/server';
import { AlternateLoginPage } from '../alternate-login/alternate-login';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
    
  //Info contains
  //type : string to find out if it is signIn process or signOut process
  //userID: the user id of the user
  //profilePicture : the link to the profile picture of user
  //scanPhoto : the link to the picture used to sign in
  info;
  name;
  profilePicture;
  reasons;

  //reasons list

  homework = {type : 'homework', status : false};
  workshop = {type : 'workshop', status : false};
  event = {type : 'event', status : false};
  coding = {type : 'coding', status : false};
  other = {type : 'other', status : false};
  reasonList=[this.homework, this.workshop,this.event,this.coding,this. other]

  constructor(public navCtrl: NavController, public navParams: NavParams, private server: ServerProvider, public alertCtrl: AlertController) {
    this.info = this.navParams.get('info');
    this.profilePicture = this.info.profilePicture;
    this.name = this.info.name;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

  confirmButton(){
    if (this.info.type == "signIn"){
      let reasons = this.generateReasonString();
      this.server.checkIn(this.info.userID, this.info.scanPhoto, reasons).then((data : any)=> {
        if (data.status == 200){
          this.successPopUp();
        }else{
          this.errorPopUp(data.status, data.message.code);
        }
      })
    }else{
      this.server.checkOut(this.info.userID).then((data : any)=>{
        console.log(data);
        if (data.status == 200){
          this.successPopUp();
        }else if (data.status == 404){
          this.logNotFoundPopUp();
        }else{
          this.errorPopUp(data.status, data.message.code)
        }
      })
    }
    this.navCtrl.push(HomePage);
  }

  declineButton(){
    this.navCtrl.push(AlternateLoginPage , { type : this.info.type});
  }

  successPopUp(){
    if (this.info.type == "signIn"){
      let alert = this.alertCtrl.create({
        title: 'Successfully Signed In',
        message: "Don't forget to sign out.",
        buttons: ['Dismiss']
      });
      alert.present();
    }else{
      let alert = this.alertCtrl.create({
        title: 'Successfully Signed Out',
        message: "Thank your for coming into the cube.",
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  errorPopUp(status, message){
    let alert = this.alertCtrl.create({
      title: 'Error ' + status,
      message: message,
      buttons: ['Dismiss']
    });
    alert.present();
  }

  logNotFoundPopUp(){
    let alert = this.alertCtrl.create({
      title: 'Forgot to Sign In',
      message: "Please sign in and sign out. Don't forget to sign in next time.",
      buttons: ['Dismiss']
    });
    alert.present();
  }

  booleanChange(activityIndex){
    this.reasonList[activityIndex].status = !this.reasonList[activityIndex].status;
  }

  generateReasonString(){
    let resultString = "";
    for(let i = 0; i < this.reasonList.length; i++){
      if (this.reasonList[i].status == true){
        if (resultString == ""){
          resultString += this.reasonList[i].type;
        }else{
          resultString += ';' + this.reasonList[i].type;
        }
      }
    }
    return resultString;
  }
}
