import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/contact-table.component';
import { ContactComponent } from './base/contact-base.component';
import { GlobalModule } from '../global/global.module';

@NgModule({
  declarations: [TableComponent, ContactComponent],
  imports: [CommonModule, GlobalModule],
  exports: [ContactComponent],
})
export class ContactModule {}
