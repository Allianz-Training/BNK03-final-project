import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInBaseComponent } from './base/sign-in-base.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { GlobalModule } from '../global/global.module';

@NgModule({
  declarations: [SignInBaseComponent, LoginFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    GlobalModule,
  ],
  exports: [SignInBaseComponent],
})
export class SignInModule {}
