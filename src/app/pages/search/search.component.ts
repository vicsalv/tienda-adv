import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // Para recibir el termino de busqueda ocupamos ActivatedRoute // 
  constructor( private route: ActivatedRoute,
               public ProductosService: ProductosService) { }

  ngOnInit() {
    this.route.params
    .subscribe( params => {
      console.log(params['termino']);
      this.ProductosService.buscarProducto(params['termino']);
    });
  }

}
