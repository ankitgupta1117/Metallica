export class Trade{
    tradeDate: string;
    commodity: string;
    side: string;
    counterparty: string;
    price: number;
    qty: number;
    location: string;
    constructor(tradeDate = "", commodity = "", 
                side ="", counterparty ="", price:number =0, qty:number =0, location =""){
       this.commodity = commodity;
       this.tradeDate = tradeDate;
       this.counterparty = counterparty;
       this.price = price;
       this.qty = qty;
       this.side = side;
       this.location = location;
    }
} 