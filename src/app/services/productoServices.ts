// producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class ProductoService {
  private apiUrl = 'https://sushi-back-services.onrender.com/api/productos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

    //get products
    getProductos(): Observable<Producto[]> {
      return this.http.get<Producto[]>(this.apiUrl);
    }
    
    //get products favoritos
    getProductosFav(): Observable<Producto[]> {
      return this.http.get<Producto[]>(this.apiUrl).pipe(
        map((productos: Producto[]) => productos.filter(producto => parseInt(producto.fav) === 1))
      );
    }
    

  //get Producto by id
  getProducto<Data>(id: number): Observable<Producto> {
    const url = `${this.apiUrl}/?id=${id}`;
    return this.http.get<Producto[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
      );

  }

  /** POST: add a new hero to the server */
  addHero(hero: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.apiUrl, hero, this.httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Producto> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Producto>(url, this.httpOptions);
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Producto): Observable<any> {
    return this.http.put(this.apiUrl, hero, this.httpOptions);
  };
}

