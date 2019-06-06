import { Component, OnInit } from '@angular/core';

// Servicio
import { ProductoService } from '../../../services/producto.service'
import { NgForm } from '@angular/forms';
import { Producto } from 'src/app/models/producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.traerProductos();
    this.limpiarFormulario();
  }

  limpiarFormulario(formularioProducto?: NgForm) {
    if (formularioProducto != null){
      formularioProducto.reset();
      this.productoService.productoSeleccionado = new Producto();
    }
  }

  onSubmit(formularioProducto: NgForm) {
    this.productoService.agregarProducto(formularioProducto.value);
    this.limpiarFormulario(formularioProducto);
  }

}
