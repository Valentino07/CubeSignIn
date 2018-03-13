import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ServerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServerProvider {
  base = '';
  serverURL = '';

  complete;

  constructor(public http: HttpClient,) {
    // this.complete = this.navParams.get('complete');
    // console.log(this.complete);
  }

  // public verifyNewUser(){
  //   return this.http.get(this.base + this.serverURL + '/verify/email/number');
  // }

}
