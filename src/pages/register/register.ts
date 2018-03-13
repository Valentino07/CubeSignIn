import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, NavParams } from 'ionic-angular';
import { CameraRegisterPage } from '../camera-register/camera-register';
import { ServerProvider } from '../../providers/server/server';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Http , HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  constructor(public navCtrl: NavController, private http: HttpClient, public formBuilder:FormBuilder, public server : ServerProvider, private alertCtrl:AlertController, public params : NavParams) {

  }
  cameraRegister = CameraRegisterPage

  // ngOnInIt() {
  //   myForm = new FormGroup({
  //     email: new FormControl()
  //   });
  // }
  
  // making sure that everything is required in the form and setting limitations for phone numbers
  myForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.pattern("")])],
    school: ['', Validators.required],
    studentPhone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
    parentPhone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])]
  })


  // making sure that everything is filled out
  formCheck(){
    // if everything is verified, save the data and push to the next page
    if(this.myForm.valid == true){
      // this.server.verifyNewUser().subscribe( (data:any) => {
        this.verifyUser();
      // })
    }
    // if there is an error in the form, return an error message
    else{
      this.errorForm();
    }
  }
  // saving the data and pushing it to the next page
  verifyUser() {
    this.navCtrl.push(CameraRegisterPage, {userData : this.myForm});
  }
  // returning an error message
  errorForm(){
    let alert = this.alertCtrl.create({
      title: 'Error Form',
      subTitle: 'Invalid Fields',
      buttons: ['Dismiss']
    });

    let message = 'Please enter in the form correctly and do not leave anything blank.';

    if (this.myForm.controls.fullName.invalid){
      message += '<br> Please do not leave name empty.';
    }
    if (this.myForm.controls.email.invalid){
      message += '<br> Please enter a valid email.';
    }
    if (this.myForm.controls.school.invalid){
      message += '<br> Please enter a valid email.';
    }
    if (this.myForm.controls.studentPhone.invalid){
      message += '<br> Please enter a valid phone number. 10 digits No spaces';
    }
    if (this.myForm.controls.parentPhone.invalid){
      message += '<br> Please enter a valid password. Password must be 4 characters long.';
    }

    alert.setMessage(message);

    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
