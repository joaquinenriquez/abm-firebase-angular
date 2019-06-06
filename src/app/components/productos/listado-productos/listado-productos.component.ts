import { Component, OnInit } from '@angular/core';

// Servicio
import { ProductoService } from '../../../services/producto.service';
import { Producto } from 'src/app/models/producto';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  listadoProductos: Producto[];


  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productoService.traerProductos()
    .snapshotChanges()
    .subscribe(item => {
      this.listadoProductos = [];
      item.forEach(element => {
        let x = element.payload.toJSON();
        x["$id"] = element.key;
        this.listadoProductos.push(x as Producto);
      })
    })

  }

}
