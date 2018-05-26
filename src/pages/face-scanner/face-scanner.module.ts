import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaceScannerPage } from './face-scanner';

@NgModule({
  declarations: [
    FaceScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(FaceScannerPage),
  ],
})
export class FaceScannerPageModule {}
