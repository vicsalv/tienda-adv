import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // Para recibir el termino de busqueda se ocupamos ActivatedRoute // 
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe( params => {
      console.log(params['termino']);
    });
  }

}
