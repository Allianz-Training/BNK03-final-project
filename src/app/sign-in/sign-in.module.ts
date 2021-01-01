import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInBaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavsComponent } from './navs/navs.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { BottomLinkComponent } from './bottom-link/bottom-link.component';
@NgModule({
  declarations: [SignInBaseComponent, NavsComponent, LoginFormComponent, BottomLinkComponent],
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule, ReactiveFormsModule],
  exports:[SignInBaseComponent]
})
export class SignInModule {}
