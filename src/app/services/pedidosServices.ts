// producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { Pedido } from '../models/pedido';
//import { detPedido } from '../models/detPedido';
import { catchError, map, tap } from 'rxjs/operators';
import { detPedido } from '../models/detPedido';


@Injectable({
  providedIn: 'root'
})


export class PedidoService {
  private apiUrl = 'http://127.0.0.1:8000/api/pedidos';
  private productosPedidos: detPedido[] = []; //peidos de productos en detPedido

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {}


    getProductos(): Observable<Producto[]> {
      return this.http.get<Producto[]>(this.apiUrl);
    }
    //get pedidos
    getPedidos(): Observable<Pedido[]> {
      return this.http.get<Pedido[]>(this.apiUrl);
    }
    

    

  //get Producto by id
  getPedido<Data>(id: number): Observable<Pedido> {
    const url = `${this.apiUrl}/?id=${id}`;
    return this.http.get<Pedido[]>(url)
      .pipe(
        map(heroes => heroes[0]), // returns a {0|1} element array
      );

  }

  /** POST: add a new hero to the server */
  postPedido(hero: Producto): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, hero, this.httpOptions);
  }

  /** DELETE: delete the hero from the server */
  deletePedido(id: number): Observable<Pedido> {
    const url = `${this.apiUrl}/${id}`;

    return this.http.delete<Pedido>(url, this.httpOptions);
  }

  /** PUT: update the hero on the server */
  updatePedido(hero: Pedido): Observable<any> {
    return this.http.put(this.apiUrl, hero, this.httpOptions);
  }

  agregarPedido(producto: Producto): void {
    const productoExistente = this.productosPedidos.find(detPedido => detPedido.producto_id === producto.id);

    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      const nuevoPedidoId = this.obtenerNuevoIdPedido();
      const nuevoPedido: detPedido = {
        id: nuevoPedidoId,
        pedido_id: nuevoPedidoId,
        cantidad: 0,
        subtotal: 0,
        producto_id: 1, //debe haber una funcion para obtener el id el producto

    

      };
      this.productosPedidos.push(nuevoPedido); //esta mal revisar la logica
    }
  }

  private obtenerNuevoIdPedido(): number {
    return 1;  //hacer la logica
  }

  

 
}
 





//detPedido: {
 // id: nuevoPedidoId, // Suponiendo que el ID del detalle del pedido también es único
  //pedido_id: nuevoPedidoId,
 // producto_id: producto.id,
 // cantidad: 1
//}