import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CameraRegisterPage } from './camera-register';

@NgModule({
  declarations: [
    CameraRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraRegisterPage),
  ],
})
export class CameraRegisterPageModule {}
