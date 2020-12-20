import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { BannerComponent } from './banner/banner.component';
import { TopicComponent } from './topic/topic.component';

@NgModule({
  declarations: [BaseComponent, BannerComponent, TopicComponent],
  imports: [CommonModule],
  exports: [BaseComponent],
})
export class LandingPageModule {}
