import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class MenuComponent implements AfterViewInit {
  constructor(private _ref: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this._ref.detach();
  }
}
