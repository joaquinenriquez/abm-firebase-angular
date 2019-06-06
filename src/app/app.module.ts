import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { environment} from '../environments/environment';

// Componentes
import { ProductosComponent } from './components/productos/productos.component';
import { ListadoProductosComponent } from './components/productos/listado-productos/listado-productos.component';
import { ProductoComponent } from './components/productos/producto/producto.component';

// Servicios
import { ProductoService } from './services/producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ListadoProductosComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
