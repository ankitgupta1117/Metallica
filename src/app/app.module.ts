import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule } from '@angular/core';
import { MatCheckboxModule} from '@angular/material';
import { TradeFormModule } from '../forms/trade/tradeForm.module';
import { AppComponent } from './app.component';
import { NewTradeComponent } from '../forms/trade/tradeForm.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TradeFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
