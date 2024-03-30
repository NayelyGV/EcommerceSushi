import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit  } from '@angular/core';
import { Pedido } from '../../models/pedido';
import { Producto } from '../../models/producto';
import { DetPedido } from '../../models/detPedido';
import { ProductoService } from '../../services/productoServices';
import { CarritoService } from '../../services/carritoServices';

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
  cantidadString: string = "0"; // Inicializamos como una cadena
  cantidad: number = 0;
  productosCarrito: Producto[] = [];



  constructor(private productoService: ProductoService, private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.getProductos();

  }

  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(productos => {
        this.productosCarrito = this.carritoService.getAllProductosCarrito(productos);
        console.log(this.productosCarrito);
      });
  }

  incrementarCantidad(producto: Producto,pedido: Pedido, detpedido: DetPedido) {
    if (producto.id === detpedido.producto_id && pedido.id === detpedido.pedido_id) {
      detpedido.cantidad = (detpedido.cantidad || 0) + 1;
    }
  }

  decrementarCantidad(producto: Producto,pedido: Pedido, detpedido: DetPedido) {
    if (producto.id === detpedido.producto_id && pedido.id === detpedido.pedido_id) {
    if (detpedido.cantidad && detpedido.cantidad > 1) {
      detpedido.cantidad -= 1;
    }
  }
  }

  //add products

  //delete products







}
