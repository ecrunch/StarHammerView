import { Component } from '@angular/core';
import { StockService } from './stock.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [StockService],
})
export class AppComponent {
  title = 'app works!';
  stocks: Array<any>;
  stock: string;
  historicals: Array<any>;


  constructor(private stockService:StockService){
    stockService.getStocks().subscribe(response => {
      this.stocks = response
      console.log(this.stocks)
    })
  }

  addStock(){
    var temp ={
      Name: this.stock
    }
    
    this.stockService.addStock(temp).subscribe(data => {
      console.log('Success '+ data)
      this.stocks.push(temp);
    })     
  }

  addHistorical(name){

    var temp ={
      Name: name
    }
    this.stockService.addHistorical(temp).subscribe(data => {

      console.log('Success '+ data)
      this.stocks.push(temp);
    })     
  }

}
