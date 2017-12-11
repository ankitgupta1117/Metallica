import { Component } from '@angular/core';
import { Trade } from './trade';


@Component({
    selector: 'trade-form',
    templateUrl: './tradeForm.component.html',
    styleUrls: ['./tradeForm.component.css']
})
export class NewTradeComponent{
    selectedSide:String = '';
    sides= ['Buy', 'Sell'];
    trade: Trade = new Trade();

    submit(){
        console.log(this.trade);
    }

}