import {NgModule} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {TabComponent} from './tabs.component';
import {TradesModule} from '../trade/trade.module';

@NgModule({
    declarations: [TabComponent],
    imports: [MatTabsModule,
      TradesModule
    ],
  exports: [TabComponent]
})
export class TabsModule{}
