import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInBaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [SignInBaseComponent],
  imports: [CommonModule,RouterModule,HttpClientModule],
  exports:[SignInBaseComponent]
})
export class SignInModule {}
