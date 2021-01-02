import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClaimBaseComponent } from './base/claim-base.component';
import { InformationComponent } from './information/information.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThirdpartyComponent } from './thirdparty/thirdparty.component';
import { OwnerComponent } from './owner/owner.component';
import { RouterModule } from '@angular/router';
import { ShowInfoComponent } from './show-info/show-info.component';
import { ListClaimComponent } from './list-claim/list-claim.component';
import { GlobalModule } from '../global/global.module';

@NgModule({
  declarations: [
    ClaimBaseComponent,
    InformationComponent,
    ThirdpartyComponent,
    OwnerComponent,
    ShowInfoComponent,
    ListClaimComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GlobalModule,
  ],
  exports: [
    ClaimBaseComponent,
    InformationComponent,
    OwnerComponent,
    ThirdpartyComponent,
  ],
})
export class ClaimModule {}
