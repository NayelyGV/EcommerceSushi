// producto.model.ts
export interface Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    stock: number;
    id: number;
    fav: string;
    categoria_id: number;
    descuento_id: number;
  }
  