import { NgModule } from "@angular/core";
import { MarketTickerComponent } from "./market-ticker.component";
import { MarketFeedModule } from "../market-live-feed/market-feed.module";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material";
import { ReferenceService } from "../../shared/services/refrerence-service/reference-service";
import { NotificationService } from "../../shared/services/notification/notification-service";

@NgModule({
    declarations: [
        MarketTickerComponent
    ],
    imports: [
        MatToolbarModule,
        MarketFeedModule,CommonModule
        
    ],
    exports: [MarketTickerComponent],
    providers: [ReferenceService, NotificationService]
})
export class MarketTickerModule{}