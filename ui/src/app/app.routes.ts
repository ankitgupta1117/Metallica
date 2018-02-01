import {Routes} from '@angular/router';
import {TradeComponent} from '../components/trade/trade.component';
import {TradeDetailsComponent} from '../components/trade/trade-detail/trade-details.component';
import {NewTradeComponent} from '../components/trade/new-trade/new-trade.component';
import {TabComponent} from '../components/tabs/tabs.component';


export const TRADE_ROUTES: Routes = [
  {path: '' , component: NewTradeComponent, pathMatch: "full"},
  {path: 'tradedetails/:id', component: TradeDetailsComponent},
  {path: 'newtrade', component: NewTradeComponent}
];


export const APP_ROUTES: Routes = [
  // {path: '', redirectTo: '/trade', pathMatch: 'full'},
  // {path: '' , component: TabComponent},
  // {path: 'trade', component: TradeComponent, children: TRADE_ROUTES}
];
