import { Injectable, Component } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { NotificationService } from "../../../shared/services/notification/notification-service";
import { TradeEvent } from "../../../shared/events/trade-events";


@Component({
    selector: 'notification-app',
    template: ''
})
export class TradeNotificationComponent{

    constructor(private _snakBar: MatSnackBar, private _notificationService: NotificationService){
        let that = this;
        this._notificationService.getTradeNotifications()
                                                    .subscribe({
                                                        next: function(data: TradeEvent){
                                                            console.log("TRADE EVENT RECIEVED "+data);
                                                            if(data.event.eventType == 'CREATE'){
                                                                that._snakBar.open("New Trade created successfully with ID: "+data.event.payload,"", {duration: 4000});
                                                            } 
                                                            if(data.event.eventType == 'UPDATE'){
                                                                that._snakBar.open("Trade updated successfully","", {duration: 4000});
                                                            }
                                                            if(data.event.eventType == 'DELETE'){
                                                                that._snakBar.open("Trade deleted successfully with ID: "+data.event.payload,"", {duration: 4000});
                                                            }
                                                        }
                                                    });
    }
}
