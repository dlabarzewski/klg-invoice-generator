import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreviewInvoiceComponent } from './components/preview-invoice/preview-invoice.component';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { PreviewInvoiceComponentModule } from './components/preview-invoice/preview-invoice.component-module';
import { NewInvoiceComponentModule } from './components/new-invoice/new-invoice.component-module';

const routes: Routes = [
  { path: 'preview', component: PreviewInvoiceComponent },
  { path: '', component: NewInvoiceComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PreviewInvoiceComponentModule,
    NewInvoiceComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
