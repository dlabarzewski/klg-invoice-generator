import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreviewInvoiceComponent } from './preview-invoice.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PreviewInvoiceComponent],
  providers: [],
  exports: [PreviewInvoiceComponent]
})
export class PreviewInvoiceComponentModule {
}
