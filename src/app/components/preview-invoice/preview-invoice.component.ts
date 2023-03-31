import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-preview-invoice',
  styleUrls: ['./preview-invoice.component.scss'],
  templateUrl: './preview-invoice.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewInvoiceComponent {
}
