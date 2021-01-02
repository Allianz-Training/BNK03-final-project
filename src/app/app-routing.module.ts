import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimBaseComponent } from './claim/base/claim-base.component';
import { LandingPageBaseComponent } from './landing-page/base/landing-page-base.component';
import { SignInBaseComponent } from './sign-in/base/sign-in-base.component';
import { SignUpBaseComponent } from './sign-up/base/sign-up-base.component';
import { OtpComponent } from './sign-up/otp/otp.component';
import { ContactComponent } from './contact/base/contact-base.component';
import { OwnerComponent } from './claim/owner/owner.component';
import { ThirdpartyComponent } from './claim/thirdparty/thirdparty.component';
import { InformationComponent } from './claim/information/information.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageBaseComponent,
  },
  {
    path: 'login',
    component: SignInBaseComponent,
  },
  {
    path: 'register',
    component: SignUpBaseComponent,
  },
  {
    path: 'register/otp',
    component: OtpComponent,
  },
  {
    path: 'home',
    component: ClaimBaseComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'owner',
    component: OwnerComponent,
  },
  {
    path: 'thirdparty',
    component: ThirdpartyComponent,
  },
  {
    path: 'info',
    component: InformationComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
