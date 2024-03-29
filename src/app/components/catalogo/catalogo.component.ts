import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit  } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/productoServices';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
  ],
  //template: `<p>home works!</p>`,
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogoComponent implements OnInit {
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
