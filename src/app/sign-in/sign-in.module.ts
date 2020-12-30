import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInBaseComponent } from './base/base.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [SignInBaseComponent],
  imports: [CommonModule,RouterModule,HttpClientModule,FormsModule, ReactiveFormsModule],
  exports:[SignInBaseComponent]
})
export class SignInModule {}
