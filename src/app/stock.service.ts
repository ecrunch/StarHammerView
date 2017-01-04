import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StockService {

  constructor(private http: Http) { }

  getStocks() {
    return this.http.get('/api/stocks').map(response => response.json());
  }

  addStock(stock){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("/api/get_stock", JSON.stringify(stock), { headers: headers }).map(response => response.json());
  }

  addHistorical(stock){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post("/api/get_historical_data", JSON.stringify(stock), { headers: headers }).map(response => response.json());
  }
}
	