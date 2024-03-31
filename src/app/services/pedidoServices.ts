// producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { catchError, map, tap } from 'rxjs/operators';
import { Pedido } from '../models/pedido';


@Injectable({
  providedIn: 'root'
})


export class PedidoService {
  private apiUrl = 'https://sushi-back-services.onrender.com/api/pedidos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

    //get Pedido
    getPedidos(): Observable<Pedido[]> {
      return this.http.get<Pedido[]>(this.apiUrl);
    }
    
    

  //get Pedido by id
  getPedido<Data>(id: number): Observable<Pedido> {
    const url = `${this.apiUrl}/?id=${id}`;
    return this.http.get<Pedido[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
      );

  }

  /** POST: add a new hero to the server */
  addHero(hero: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, hero, this.httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Pedido> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Pedido>(url, this.httpOptions);
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Pedido): Observable<any> {
    return this.http.put(this.apiUrl, hero, this.httpOptions);
  };
}

