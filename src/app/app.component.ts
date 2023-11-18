import { Component } from '@angular/core';
import { MonedasServiceService } from './monedas-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TCambioDeMonedas';

  selectedCurrencyO: string = '';
  selectedCurrencyD: string = '';
  monto: number = 0;
  responseData: any;

  constructor(private monedasService: MonedasServiceService) {}

  submit(){

    const dataExchange = {
      monto: this.monto,
      monedaOrigen: this.selectedCurrencyO,
      monedaDestino: this.selectedCurrencyD,
    };

    if (this.selectedCurrencyO === this.selectedCurrencyD) {
      alert('Error: Moneda de origen y destino deben ser diferentes.');
      return;
    }

    this.monedasService.sendData(dataExchange).subscribe((response) => {
        console.log('Ok:', response);
        this.responseData = response;
      },
      (error) => {
        console.error('Error:', error);
      });
    console.log("Data sub",dataExchange);
  }
}
