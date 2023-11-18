import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MonedasServiceService {
  private apiUrl = 'http://localhost:8080/calcular';
  constructor(private http: HttpClient) { }

  sendData(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}
