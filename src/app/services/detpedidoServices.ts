// producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DetPedido } from '../models/detPedido';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class DetPedidoService {
  private apiUrl = 'https://sushi-back-services.onrender.com/api/detpedidos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

    //get products
    getDetPedidos(): Observable<DetPedido[]> {
      return this.http.get<DetPedido[]>(this.apiUrl);
    }
    

    

  //get Producto by id
  getDetPedido<Data>(id: number): Observable<DetPedido> {
    const url = `${this.apiUrl}/?id=${id}`;
    return this.http.get<DetPedido[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
      );

  }

  /** POST: add a new hero to the server */
  addHero(hero: DetPedido): Observable<DetPedido> {
    return this.http.post<DetPedido>(this.apiUrl, hero, this.httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<DetPedido> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<DetPedido>(url, this.httpOptions);
  }

  /** PUT: update the hero on the server */

}

