import { NgModule } from "@angular/core";
import { ReferenceService } from "../../shared/services/refrerence-service/reference-service";
import { CommodityPipe } from "./commodity.pipe";
import { LocationPipe } from "./location.pipe";
import { ToDatePipe } from "./to-date.pipe";
import { SidePipe } from "./side.pipe";
import { ReferenceServiceModule } from "../../shared/services/refrerence-service/reference-service.module";


@NgModule({
    declarations:[
        CommodityPipe, LocationPipe, ToDatePipe, SidePipe
    ],
    imports: [
       
    ],
    exports:[
        CommodityPipe, LocationPipe, ToDatePipe, SidePipe
    ],
    providers: [
        ReferenceServiceModule
    ]
})
export class PipesModule{}