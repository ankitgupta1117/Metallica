import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {TabsModule} from '../components/tabs/tabs.module';
import {TradesModule} from '../components/trade/trade.module';
import {APP_ROUTES} from './app.routes';
import { MatToolbarModule } from '@angular/material';
import { MarketFeedModule } from '../components/market-live-feed/market-feed.module';
import { MarketTickerModule } from '../components/market-ticker/market-ticker.module';
import { ReferenceDataStore } from '../shared/services/ref-data-store';
import { ServicesModule } from '../shared/services/services.module';
import { UserService } from '../shared/services/user-service/user-service';

export function initializeDataStore(refDataStore: ReferenceDataStore){
  return () => refDataStore.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatToolbarModule,
    BrowserModule,
    TabsModule, TradesModule,
    MarketTickerModule,
    ServicesModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    UserService,
    ReferenceDataStore,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDataStore,
      deps: [ReferenceDataStore],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
