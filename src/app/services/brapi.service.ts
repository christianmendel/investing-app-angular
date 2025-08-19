import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrapiService {

  private baseUrl = 'https://i9lw5it08i.execute-api.sa-east-1.amazonaws.com/v1';

  constructor(private http: HttpClient) { }

  getStock(symbol: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?symbol=${symbol}`, {});
  }
}
