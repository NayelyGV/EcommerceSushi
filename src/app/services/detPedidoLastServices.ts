// producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pedido } from '../models/pedido';
import { DetPedido } from '../models/detPedido';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class DetPedidoLastService {
  private apiUrl = 'https://sushi-back-services.onrender.com/api/lastdetpedidos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

    //get the last pedido products
    getTheLastDetPedido(): Observable<DetPedido[]> {
      return this.http.get<DetPedido[]>(this.apiUrl);
    }
    

}

