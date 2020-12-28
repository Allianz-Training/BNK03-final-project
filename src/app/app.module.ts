import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageModule } from './landing-page/landing-page.module';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { ClaimModule } from './claim/claim.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

// import { NgOtpInputModule } from  'ng-otp-input';


@NgModule({
  declarations: [AppComponent, ContactComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LandingPageModule,
    FormsModule,
    SignInModule,
    SignUpModule,
    ClaimModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
