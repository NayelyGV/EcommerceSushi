// producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class PedidoLastService {
  private apiUrl = 'http://127.0.0.1:8000/api/lastpedidos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

    //get the last pedido products
    getTheLastPedido(): Observable<Pedido[]> {
      return this.http.get<Pedido[]>(this.apiUrl);
    }
    

}

