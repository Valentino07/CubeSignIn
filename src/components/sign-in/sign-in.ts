import { Component } from '@angular/core';

/**
 * Generated class for the SignInComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInComponent {

  text: string;

  constructor() {
    console.log('Hello SignInComponent Component');
    this.text = 'Hello World';
  }

}
