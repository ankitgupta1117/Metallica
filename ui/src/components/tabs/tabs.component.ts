import {Component, ViewEncapsulation} from '@angular/core';
import { NewTradeComponent } from '../trade/new-trade/new-trade.component';
@Component({
    selector: 'tab-comp',
    template: `<mat-tab-group >

      <mat-tab label="Trades" class="tab-content"> <trade-app> </trade-app> </mat-tab>
      <mat-tab label="Transfers"  > <span md-colors="{color: 'primary'}"> Content 2 </span></mat-tab>
      <mat-tab label="Transport"  > Content 2 </mat-tab>

    </mat-tab-group>`,
    styleUrls: ['./tabs.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TabComponent{

}
