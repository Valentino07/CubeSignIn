import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage)
  ],
})
export class RegisterPageModule {}
