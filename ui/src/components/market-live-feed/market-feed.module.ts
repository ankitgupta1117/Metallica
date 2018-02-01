import { NgModule } from "@angular/core";
import { MarketFeedComponent } from "./market-feed.component";
import { MatToolbarModule, MatIconModule, MatCardModule, MatIconRegistry } from "@angular/material";
import { CommonModule } from "@angular/common";
import { PipesModule } from "../../shared/pipes/PipesModules";


@NgModule({
    declarations: [
        MarketFeedComponent   
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        CommonModule,
        PipesModule
    ],
    exports: [MarketFeedComponent],
    providers: [MatIconRegistry]
})
export class MarketFeedModule{}