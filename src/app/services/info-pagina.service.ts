import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // este permite realisar peticiones //

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any[] = [];
  cargada = false;

  constructor( private http: HttpClient ) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
     // aqui leemos el archivo json //
     this.http.get('assets/data/data-pagina.json')
     .subscribe( (resp: InfoPagina) => {
     this.cargada = true;
     this.info = resp;
    });
  }

  private cargarEquipo() {
     // aqui leemos el archivo json de la base de datos Firebase//
     this.http.get('https://angular-html-db7e4.firebaseio.com/equipo.json')
     .subscribe( (resp: any[] ) => {

     this.equipo = resp;

    });
  }
}
