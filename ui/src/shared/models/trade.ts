
export class Trade {
  id: number;
  tradeDate: string;
  commodity: string;
  side: string;
  cntrParty: string;
  price: number;
  quantity: number;
  location: string;
  status: string;
  constructor(tradeDate = "", commodity = "",
    side = "", counterparty = "", price: number = 0, qty: number = 0, location = "", status = "New") {
    this.commodity = commodity;
    this.tradeDate = tradeDate;
    this.cntrParty = counterparty;
    this.price = price;
    this.quantity = qty;
    this.side = side;
    this.location = location;
    this.status = status;
  }
}
