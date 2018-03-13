import { NgModule } from '@angular/core';
import { RegisterComponent } from './register/register';
import { SignInComponent } from './sign-in/sign-in';
import { LogoutComponent } from './logout/logout';
@NgModule({
	declarations: [RegisterComponent,
    SignInComponent,
    LogoutComponent],
	imports: [],
	exports: [RegisterComponent,
    SignInComponent,
    LogoutComponent]
})
export class ComponentsModule {}
