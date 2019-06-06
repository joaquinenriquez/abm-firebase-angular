import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  listadoProductos: AngularFireList<any>;
  productoSeleccionado: Producto = new Producto();

  constructor(private firebase: AngularFireDatabase) { }

  traerProductos(): AngularFireList<any>
  {
    return this.listadoProductos = this.firebase.list('productos');
  }

  agregarProducto(nuevoProducto: Producto)
  {
    this.listadoProductos.push( {
      nombre: nuevoProducto.nombre,
      categoria: nuevoProducto.categoria,
      ubicacion: nuevoProducto.ubicacion,
      precio: nuevoProducto.precio
    });
  } 
  
  actualizarProducto(nuevoProducto: Producto)
  {
    this.listadoProductos.update(nuevoProducto.$id, {
      nombre: nuevoProducto.nombre,
      categoria: nuevoProducto.categoria,
      ubicacion: nuevoProducto.ubicacion,
      precio: nuevoProducto.precio
    });
  }

  eliminarProducto($id: string)
  {
    this.listadoProductos.remove($id);
  }

}
