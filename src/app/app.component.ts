// aqui se inyectan los servicios para poder usalos //

import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // llamadas a los contrsuctores de los servicios //
constructor( public _infoPagina: InfoPaginaService,
             public _productosServices: ProductosService ) {

}

}
