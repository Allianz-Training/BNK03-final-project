import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageBaseComponent } from './base/base.component';
import { BannerComponent } from './banner/banner.component';
import { TopicComponent } from './topic/topic.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LandingPageBaseComponent, BannerComponent, TopicComponent],
  imports: [CommonModule,RouterModule],
  exports: [LandingPageBaseComponent],
})
export class LandingPageModule {}
