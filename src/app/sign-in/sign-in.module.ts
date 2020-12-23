import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule],
  exports:[BaseComponent]
})
export class SignInModule {}
