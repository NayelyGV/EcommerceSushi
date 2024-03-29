import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit  } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/productoServices';

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



  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();

  }

  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(response => {
        console.log(response); // Imprime los productos en la consola
        this.productos = response; // Asigna los productos a la propiedad productos
      });
  }




  //add products

  //delete products







}
