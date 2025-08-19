import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrapiService {

  private baseUrl = 'https://g72mvmx6r2cu6675seqs7jowfm0vkcbq.lambda-url.sa-east-1.on.aws';

  constructor(private http: HttpClient) { }

  getStock(symbol: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?symbol=${symbol}`, {});
  }
}
