import { Component, Input} from "@angular/core";
import { MatIconRegistry } from "@angular/material";

@Component({
    selector: 'market-feed',
    templateUrl: 'market-feed.component.html',
    styleUrls: ['market-feed.component.css']
})
export class MarketFeedComponent{
    @Input('isPositive')
    private isPositive: boolean = false;
    @Input('price')
    private price: number;
    @Input('name')
    private commodity: string;
    constructor(public _matIconRegistry: MatIconRegistry){
        this.price = 0;
        _matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    
}