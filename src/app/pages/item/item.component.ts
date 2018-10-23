import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { ProductoDescripcion } from '../../interfaces/productoDescripcion';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcion;
  id: string;
  // Aqui es para leer la url importamos el servicio ActivateRoute //
  constructor(private route: ActivatedRoute,
              private _productoServices: ProductosService) { }

  ngOnInit() {
    // Aqui es donde se leen las url //
    this.route.params
      .subscribe(parametros => {
        this._productoServices.getProducto(parametros['id'])
            .subscribe((producto: ProductoDescripcion) => {
          this.id = parametros['id'];
          this.producto = producto;
        });
    });
  }

}
