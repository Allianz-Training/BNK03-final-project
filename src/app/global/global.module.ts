import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenNavbarComponent } from './authen-navbar/authen-navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthenNavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [AuthenNavbarComponent],
})
export class GlobalModule {}
