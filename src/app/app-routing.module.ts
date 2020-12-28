import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimBaseComponent } from './claim/base/base.component';
import { LandingPageBaseComponent } from './landing-page/base/base.component';
import { SignInBaseComponent } from './sign-in/base/base.component';
import { SignUpBaseComponent } from './sign-up/base/base.component';
import { OtpComponent } from './sign-up/otp/otp.component';
import { ContactComponent } from './contact/contact.component';
import { OwnerComponent } from './claim/owner/owner.component'
import { ThirdpartyComponent } from './claim/thirdparty/thirdparty.component';

const routes: Routes = [
  {
    path:'',
    component: LandingPageBaseComponent
  },
  {
    path:'login',
    component: SignInBaseComponent
  },
  {
    path:'register',
    component: SignUpBaseComponent
  },
  {
    path:'register/otp',
    component: OtpComponent
  },
  {
    path:'home',
    component: ClaimBaseComponent
  },
  {
    path:'contact',
    component: ContactComponent
  },
  {
    path:'owner',
    component: OwnerComponent
  },
  {
    path:'thirdparty',
    component: ThirdpartyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
