import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/productoServices';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  //template: `<p>home works!</p>`,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  productos: Producto[] = [];


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