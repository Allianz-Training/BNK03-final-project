import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimBaseComponent } from './base/base.component';
import { InformationComponent } from './information/information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThirdpartyComponent } from './thirdparty/thirdparty.component';
import { OwnerComponent } from './owner/owner.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShowInfoComponent } from './show-info/show-info.component';
import { ListClaimComponent } from './list-claim/list-claim.component';

@NgModule({
  declarations: [ClaimBaseComponent, InformationComponent, ThirdpartyComponent, OwnerComponent, HeaderComponent, ShowInfoComponent, ListClaimComponent],
  imports: [
    CommonModule,FormsModule, ReactiveFormsModule,RouterModule
  ],
  exports: [
    ClaimBaseComponent,InformationComponent,OwnerComponent, ThirdpartyComponent
  ]
})
export class ClaimModule { }
