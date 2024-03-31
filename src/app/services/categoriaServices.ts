// producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class CategoriaService {
  private apiUrl = 'https://sushi-back-services.onrender.com/api/categorias';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}

    //get products
    getCategorias(): Observable<Categoria[]> {
      return this.http.get<Categoria[]>(this.apiUrl);
    }
    

    

  //get Producto by id
  getCategoria<Data>(id: number): Observable<Categoria> {
    const url = `${this.apiUrl}/?id=${id}`;
    return this.http.get<Categoria[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
      );

  }

  /** POST: add a new hero to the server */
  postCategoria(hero: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.apiUrl, hero, this.httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deleteCategoria(id: number): Observable<Categoria> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Categoria>(url, this.httpOptions);
  }

  /** PUT: update the hero on the server */
  putCategoria(hero: Categoria): Observable<any> {
    return this.http.put(this.apiUrl, hero, this.httpOptions);
  }


 

}

