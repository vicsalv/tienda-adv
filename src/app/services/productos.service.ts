import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  // bamdera de cargando productor //
  cargando = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) {
    this.cargarProductos();
   }

   private cargarProductos() {
        return new Promise((resolve, reject) => {
        this.http.get('https://angular-html-db7e4.firebaseio.com/productos_idx.json')
        .subscribe((resp: Producto[]) => {
        this.productos = resp;
        this.cargando = false;
        resolve();
       });
     });
}

  getProducto( id: string) {
   return this.http.get(`https://angular-html-db7e4.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto( termino: string ) {
    if (this.productos.length === 0) {
      // esperar que esten cargados los productos
      this.cargarProductos().then( ( ) => {
        // este se ejecutara despues de tener los productos
        // aplicar el filtor
        this.filtrarProductos( termino );
      });
    } else {
      // podemos aplicar filtor de busqueda
      this.filtrarProductos( termino );
    }

  }

  private filtrarProductos( termino: string ) {
    // purgar o limpiar el arreglo de productos filtrados
    this.productosFiltrado = [];
    // pasamos a minusculas el termino
    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {
      // pasmos a minusculas el titulo
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );
      }
    });
  }

}
