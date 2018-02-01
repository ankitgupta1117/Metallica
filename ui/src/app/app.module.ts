import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {TabsModule} from '../components/tabs/tabs.module';
import {TradesModule} from '../components/trade/trade.module';
import {APP_ROUTES} from './app.routes';
import { MatToolbarModule } from '@angular/material';
import { MarketFeedModule } from '../components/market-live-feed/market-feed.module';
import { MarketTickerModule } from '../components/market-ticker/market-ticker.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    TabsModule, TradesModule,
    MarketTickerModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
