import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlternateLoginPage } from './alternate-login';

@NgModule({
  declarations: [
    AlternateLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(AlternateLoginPage),
  ],
})
export class AlternateLoginPageModule {}
