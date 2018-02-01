import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'trade-app',
  template: `
  <div class="body-margin center-align">
      <trade-search (onSearch) = "tradeslist.onSearch($event)"></trade-search>
      <div class="trade-container"> <trade-search-results #tradeslist></trade-search-results> 
      <router-outlet></router-outlet>
      <!--  <new-trade></new-trade> -->
      </div>
      <notification-app> </notification-app>
  </div>
 
  `,
  styleUrls: ['./trade.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TradeComponent{}
