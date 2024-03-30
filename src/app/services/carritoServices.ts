// producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


export class CarritoService  {
  carritoProductos: number[] = [];
  productos: Producto[] = []; // Lista de productos

  constructor() { }

  agregarAlCarrito(idProducto: number) {
    this.carritoProductos.push(idProducto);
    console.log("Producto agregado al carrito:", idProducto);
  }

  getAllProductosCarrito(productos: Producto[]): Producto[] {
    const productosCarrito: Producto[] = [];
    for (const id of this.carritoProductos) {
      const producto = productos.find(p => p.id === id);
      if (producto) {
        productosCarrito.push(producto);
      }
    }
    return productosCarrito;
  }
  

}

