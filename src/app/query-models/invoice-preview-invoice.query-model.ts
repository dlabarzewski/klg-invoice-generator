import { InvoicePreviewInvoiceItemQueryModel } from "./invoice-preview-invoice-item.query-model";

export interface InvoicePreviewInvoiceQueryModel {
  readonly items: InvoicePreviewInvoiceItemQueryModel[];
  readonly totalValue: number;
}
