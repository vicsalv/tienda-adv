import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafilio',
  templateUrl: './portafilio.component.html',
  styleUrls: ['./portafilio.component.css']
})

export class PortafilioComponent implements OnInit {

  constructor( public productosServices: ProductosService ) { }

  ngOnInit() {
  }

}
