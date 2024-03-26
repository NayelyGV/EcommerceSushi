import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit  } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/productoServices';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
  ],
  //template: `<p>home works!</p>`,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];
  productosFav: Producto[] = [];


  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.getProductos();
    this.getProductosFav();
  }

  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(response => {
        console.log(response);
        this.productos = response;
        console.log('Productos cargados:', this.productos);
      });
  }

  getProductosFav(): void {
    this.productoService.getProductosFav()
      .subscribe(response => {
        console.log(response); // Imprime los productos en la consola
        this.productosFav = response; // Asigna los productos a la propiedad productos
      });
  }



  //add products

  //delete products
}
