import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInBaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [SignInBaseComponent],
  imports: [CommonModule,RouterModule],
  exports:[SignInBaseComponent]
})
export class SignInModule {}
