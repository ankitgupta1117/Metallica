import {Component} from '@angular/core';
import {MatTableDataSource, MatIconRegistry, MatSnackBar} from '@angular/material';
import { Trade } from '../../../shared/models/trade';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { TradeService } from '../../../shared/services/trade-service/trade-service';
import { Router } from '@angular/router';


@Component({
  selector: 'trade-search-results',
  templateUrl: './trade-search-results.html',
  styleUrls: ['./table-search-results.css'],
  providers: [MatSnackBar, TradeService]
})
export class TradeSearchResultsComponent implements OnInit{
  
  columnsToBeDisplayed = ['tradeDate', 'commodity', 'side', 'price',
                           'quantity', 'counterParty', 'location','del-icon'];
  private dataset: MatTableDataSource<Trade>;
  
  constructor(private _tradeService: TradeService
                      , private _router: Router){
  }


  handleRow(action:string, row: Trade){
    console.log("action="+action +", "+row.id);
    if(action == "delete"){
      console.log("Delete Request "+row.id);
      let that = this;
      this._tradeService.deleteTrade(""+row.id).subscribe({
        next: function(data){
          console.log("Trade with Id: "+row.id+" deleted.");
          console.log("Before "+that.dataset.data.length);
          that.removeTrade(row);
          console.log(that.dataset.data.length);
        } 
      });
    }else{
      this._router.navigate(["/tradedetails",""+row.id]);
    }
  }

  private removeTrade(trade: Trade):void {
    this.dataset.data.splice(this.dataset.data.indexOf(trade),1);
    this.dataset.data = this.dataset.data;
  }

  ngOnInit(): void {
    this.dataset = new MatTableDataSource<Trade>();
    
  }
 
  public onSearch(trades: Trade[]){
    this.dataset.data=trades;
  }

  
}