import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenNavbarComponent } from './authen-navbar/authen-navbar.component';
import { RouterModule } from '@angular/router';
import { HomepageNavbarComponent } from './homepage-navbar/homepage-navbar.component';

@NgModule({
  declarations: [AuthenNavbarComponent, HomepageNavbarComponent],
  imports: [CommonModule, RouterModule],
  exports: [AuthenNavbarComponent, HomepageNavbarComponent],
})
export class GlobalModule {}
