import { ChangeDetectionStrategy, Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { map, Observable, of, shareReplay, switchMap, take } from 'rxjs';
import { InvoicePreviewInvoiceQueryModel } from 'src/app/query-models/invoice-preview-invoice.query-model';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-preview-invoice',
  styleUrls: ['./preview-invoice.component.scss'],
  templateUrl: './preview-invoice.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PreviewInvoiceComponent implements OnDestroy {
  readonly invoice$: Observable<InvoicePreviewInvoiceQueryModel|undefined> = this._invoiceService.getLast().pipe(
    map(invoice => {
      if (invoice === undefined) return undefined;

      return {
        items: invoice.items,
        totalValue: invoice.items.reduce((acc, cur) => acc + cur.count * cur.price, 0)
      }
    }),
    shareReplay(1)
  );

  constructor(private _invoiceService: InvoiceService) {
  }

  ngOnDestroy(): void {
    this.invoice$.pipe(
      take(1),
      switchMap(invoice => {
        if (invoice === undefined) return of();

        return this._invoiceService.clearLast();
      })
    ).subscribe();
  }
}
