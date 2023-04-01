import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { InvoicePreviewInvoiceQueryModel } from '../../query-models/invoice-preview-invoice.query-model';
import { InvoiceService } from '../../services/invoice.service';
import { CompanyService } from '../../services/company.service';
import { InvoicePreviewCompanyQueryModel } from 'src/app/query-models/invoice-preview-company.query-model';

@Component({
  selector: 'app-preview-invoice',
  styleUrls: ['./preview-invoice.component.scss'],
  templateUrl: './preview-invoice.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewInvoiceComponent implements OnDestroy {
  readonly invoice$: Observable<InvoicePreviewInvoiceQueryModel | undefined> = this._invoiceService.getLast().pipe(
    map(invoice => {
      if (invoice === undefined) return undefined;

      return {
        items: invoice.items,
        totalValue: invoice.items.reduce((acc, cur) => acc + cur.count * cur.price, 0)
      }
    }),
    shareReplay(1)
  );
  readonly company$: Observable<InvoicePreviewCompanyQueryModel> = this._companyService.getInfo().pipe(
    map(company => ({
      name: company.name,
      address: company.address,
      phones: company.phones
    }))
  );

  constructor(private _invoiceService: InvoiceService, private _companyService: CompanyService) {
  }

  ngOnDestroy(): void {
    this._invoiceService.clear();
  }
}
