import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInConfirmPage } from './sign-in-confirm';

@NgModule({
  declarations: [
    SignInConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInConfirmPage),
  ],
})
export class SignInConfirmPageModule {}
