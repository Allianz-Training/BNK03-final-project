import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimBaseComponent } from './base/base.component';
import { InformationComponent } from './information/information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThirdpartyComponent } from './thirdparty/thirdparty.component';
import { OwnerComponent } from './owner/owner.component';

@NgModule({
  declarations: [ClaimBaseComponent, InformationComponent, ThirdpartyComponent, OwnerComponent],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule
  ],
  exports: [
    ClaimBaseComponent,InformationComponent,OwnerComponent, ThirdpartyComponent
  ]
})
export class ClaimModule { }
