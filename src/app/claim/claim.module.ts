import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { InformationComponent } from './information/information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseComponent, InformationComponent],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ],
  exports: [
    BaseComponent,InformationComponent
  ]
})
export class ClaimModule { }
