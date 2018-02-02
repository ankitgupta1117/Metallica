import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import {NewTradeComponent} from './new-trade/new-trade.component';
import {MatInputModule, MatSelect, MatSelectModule, MatToolbar, MatToolbarModule, MatIconModule, MatIconRegistry, MatSnackBarModule, MatSnackBar} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {TradeDetailsComponent} from './trade-detail/trade-details.component';
import {TradeComponent} from './trade.component';
import {RouterModule} from '@angular/router';
import {TRADE_ROUTES} from '../../app/app.routes';
import {TradeSearchResultsComponent} from './trade-search-results/trade-search-results.component';
import {TradeSearchComponent} from './trade-search/trade-search.component';
import {ReferenceServiceModule} from '../../shared/services/refrerence-service/reference-service.module';
import { CommodityPipe } from '../../shared/pipes/commodity.pipe';
import { ReferenceService } from '../../shared/services/refrerence-service/reference-service';
import { PipesModule } from '../../shared/pipes/PipesModules';
import { TradeService } from '../../shared/services/trade-service/trade-service';
import { NotificationService } from '../../shared/services/notification/notification-service';
import { TradeNotificationComponent } from './trade-notificaition/trade-notification.component';
import { Router } from '@angular/router';

@NgModule({
    declarations: [TradeComponent, 
        NewTradeComponent, 
        TradeDetailsComponent, 
        TradeSearchResultsComponent, 
        TradeSearchComponent,
        TradeNotificationComponent
        ],
    imports: [
        RouterModule.forChild(TRADE_ROUTES),
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        BrowserModule,
        MatRadioModule,
        FormsModule, ReactiveFormsModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule,
        MatDatepickerModule, MatNativeDateModule,
        MatSelectModule, MatSnackBarModule,
        MatToolbarModule, 
        // MatIconModule, 
        ReferenceServiceModule,
        PipesModule
    ],
  exports: [TradeComponent],
  providers:[ReferenceService, MatSnackBar, TradeService, NotificationService]
})
export class TradesModule{

}
