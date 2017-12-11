import { Component } from '@angular/core';
import { NewTradeComponent } from '../forms/trade/tradeForm.component';

@Component({
  selector: 'app-root',
  template: `<trade-form> </trade-form>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mettalica';
}
