import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { InformationComponent } from './information/information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThirdpartyComponent } from './thirdparty/thirdparty.component';
import { OwnerComponent } from './owner/owner.component';

@NgModule({
  declarations: [BaseComponent, InformationComponent, ThirdpartyComponent, OwnerComponent],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ],
  exports: [
    BaseComponent,InformationComponent,OwnerComponent, ThirdpartyComponent
  ]
})
export class ClaimModule { }
