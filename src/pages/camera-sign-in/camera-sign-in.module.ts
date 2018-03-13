import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraSignInPage } from './camera-sign-in';

@NgModule({
  declarations: [
    CameraSignInPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraSignInPage),
  ],
})
export class CameraSignInPageModule {}
