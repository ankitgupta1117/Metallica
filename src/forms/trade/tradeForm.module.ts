import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewTradeComponent } from './tradeForm.component';
import { MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core'

@NgModule({
    declarations: [NewTradeComponent],
    imports: [
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatRadioModule,
        FormsModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule, MatNativeDateModule
    ],
    exports: [NewTradeComponent]
})
export class TradeFormModule{

}