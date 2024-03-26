import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit  } from '@angular/core';
import { Producto } from '../../models/producto';
import { Categoria } from '../../models/categoria';
import { ProductoService } from '../../services/productoServices';
import { CategoriaService } from '../../services/categoriaServices';

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
  categorias: Categoria[] = [];
  cantidadString: string = "0"; // Inicializamos como una cadena
  cantidad: number = 0;



  constructor(private productoService: ProductoService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.getProductos();
    this.getCategorias(); 

  }

  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(response => {
        console.log(response); // Imprime los productos en la consola
        this.productos = response; // Asigna los productos a la propiedad productos
      });
  }
  getCategorias(): void {
    this.categoriaService.getCategorias()
      .subscribe(response => {
        console.log(response); // Imprime los productos en la consola
        this.categorias = response; // Asigna los productos a la propiedad productos
      });
  }

  getCategoriaNombre(categoria_id: number): string {
    console.log('Categorías cargadas:', this.categorias);
    console.log('ID de categoría a buscar:', categoria_id);
    const categoria = this.categorias.find(c => c.id === categoria_id);
    console.log('Categoría encontrada:', categoria);
    return categoria ? categoria.nombre : 'Categoría Desconocida';
  }
  




  //add products

  //delete products







}
