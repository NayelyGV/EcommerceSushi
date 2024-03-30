import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit  } from '@angular/core';
import { Producto } from '../../models/producto';
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




  //add products

  //delete products







}
