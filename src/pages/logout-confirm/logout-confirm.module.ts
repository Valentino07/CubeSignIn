import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogoutConfirmPage } from './logout-confirm';

@NgModule({
  declarations: [
    LogoutConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(LogoutConfirmPage),
  ],
})
export class LogoutConfirmPageModule {}
