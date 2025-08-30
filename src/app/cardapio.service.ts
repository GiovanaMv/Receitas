import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardapioService {
  private apiUrl = 'https://api-cardapio-production.up.railway.app/api/cardapio';

  constructor(private http: HttpClient) {}

  getCardapio(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
