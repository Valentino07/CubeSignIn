import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerProvider {
  base = 'https://txt-sign-in.herokuapp.com';
  serverURL = '/txt-sign-in-facial-recognition/';

  constructor(public http: HttpClient,) {
  
  }

  registerUser(formData){
    return new Promise(resolve => {
      this.http.post(this.base + this.serverURL + 'signup', formData)
        .subscribe(data => {
            resolve(data);
        });
    });
  }

  rekognition(formData){
    return new Promise(resolve => {
      this.http.post(this.base + this.serverURL + 'rekognition', formData)
        .subscribe(data => {
          resolve(data);
      });
    });
  }

  checkIn(userID, scanPhoto, reasons){
    let data = { 
      userID : userID,
      scan : scanPhoto,
      reasons: reasons
    };
    return new Promise(resolve => {
      this.http.post(this.base + this.serverURL + 'checkIn', data)
        .subscribe(data => {
          resolve(data);
      });
    });
  }

  checkOut(userID){
    let data = { userID : userID };
    return new Promise(resolve => {
      this.http.post(this.base + this.serverURL + 'checkOut', data)
        .subscribe(data => {
          resolve(data);
      });
    });
  }

  verification(phoneNumber){
    let data = { phoneNumber: phoneNumber};
    return new Promise(resolve => {
      this.http.post(this.base + this.serverURL + 'verify', data)
        .subscribe(data => {
          resolve(data);
      });
    });
  }

  alternateLogIn(email){
    let data = { email : email};
    return new Promise(resolve => {
      this.http.post(this.base + this.serverURL + 'alternate', data)
        .subscribe(data => {
          resolve(data);
      });
    });
  }

  alternateConfirm(userID){
    let data = { userID : userID };
    return new Promise(resolve => {
      this.http.post(this.base + this.serverURL + 'alternateConfirm', data)
        .subscribe(data => {
          resolve(data);
      });
    });
  }
}
