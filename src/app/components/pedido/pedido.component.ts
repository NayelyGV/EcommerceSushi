import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionStrategy, Component, OnInit  } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { Producto } from '../../models/producto';
import { DetPedido } from '../../models/detPedido';
import { ProductoService } from '../../services/productoServices';
import { CarritoService } from '../../services/carritoServices';
import { PedidoService } from '../../services/pedidoServices';
import { PedidoLastService } from '../../services/pedidoLastServices';
import { DetPedidoLastService } from '../../services/detPedidoLastServices';



@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [
    CommonModule,
  ],
  //template: `<p>home works!</p>`,
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

export class PedidoComponent implements OnInit {
  productos: Producto[] = [];
  cantidad: number = 1;
  productosCarrito: Producto[] = [];
  pedidoLast: Pedido[]=[];
  detPedidoLast: DetPedido[]=[];
  // Array para almacenar las cantidades de cada producto
  cantidades: number[] = [];
  total: number = 0;




  constructor(private productoService: ProductoService, private carritoService: CarritoService, private pedidoLastService:PedidoLastService, private pedidoService:PedidoService, private detPedidoLastService:DetPedidoLastService) { }

  ngOnInit(): void {
    this.getProductos();
    this.getTheLastPedido();
    this.getTheLastDetPedido();
    // Inicializar el array de cantidades
    this.productosCarrito.forEach(() => {
      this.cantidades.push(0);
    });
  }

  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(productos => {
        this.productosCarrito = this.carritoService.getAllProductosCarrito(productos);
        this.productosCarrito.forEach(producto => {
          this.cantidades[producto.id] = 0; // Inicializar las cantidades para cada producto
        });
      });
  }


  getTheLastPedido(): void{
    this.pedidoLastService.getTheLastPedido()
    .subscribe(response => {
      console.log(response);
      this.pedidoLast= response;
      console.log('Ultimo pedido:', this.pedidoLast);
    });

  }
  getTheLastDetPedido(): void{
    this.detPedidoLastService.getTheLastDetPedido()
    .subscribe(response => {
      console.log(response);
      this.detPedidoLast= response;
      console.log('Ultimo detPedido:', this.detPedidoLast);
    });

  }
  enviarPedido(): void {
    // Obtener el nombre del cliente
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
  
    // Inicializar la variable para almacenar los detalles del pedido
    let detallesPedido = '';
  
    // Recorrer todos los productos detallados
    this.productosCarrito.forEach(producto => {
      // Obtener la cantidad y el subtotal del producto
      const cantidad = this.getCantidad(producto.id);
      const subtotal = this.getSubtotal(producto.id);
  
      // Agregar los detalles del producto a la cadena de detalles del pedido
      detallesPedido += `Producto: ${producto.nombre}\nCantidad: ${cantidad}\nSubtotal: ${subtotal}\n`;
    });
  
    // Obtener el total del pedido
    const total = this.getTotal();
  
 // Construir el texto completo del pedido
 const textoPedido = `Pedido de: ${nombre}\n\nDetalles del Pedido:\n${detallesPedido}\nTotal a pagar: Bs. ${total}\n\nGracias por tu pedido.`;
  
    // Construir la URL de WhatsApp con los datos del pedido
    const url =
      'https://api.whatsapp.com/send?phone=69490587&text=' +
      encodeURIComponent(textoPedido);
  
    // Abrir la URL en una nueva pestaña
    window.open(url, '_blank');
  }
  
  incrementarCantidad(): void {
    this.cantidad++;
  }
  
  decrementarCantidad(): void {
    if (this.cantidad > 0) {
      this.cantidad--;
    }
  }

  getSubtotal(productoId: number): number {
    const cantidad = this.getCantidad(productoId);
    const producto = this.productosCarrito.find(p => p.id === productoId);
    if (producto) {
      return cantidad * producto.precio;
    }
    return 0;
  }
  
  getTotal(): number {
    let total = 0;
    this.productosCarrito.forEach(producto => {
      total += this.getSubtotal(producto.id);
    });
    return total;
  }
  
  getCantidad(productoId: number): number {
    return this.cantidad || 0;
  }

}