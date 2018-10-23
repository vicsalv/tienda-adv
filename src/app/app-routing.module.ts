// Modulo de rutas de navegacion entre las paginas //

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafilioComponent } from './pages/portafilio/portafilio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

const app_routes: Routes = [
  {path: 'home', component: PortafilioComponent }, // cuando esta paht en blanco ir portafiliocomponet.html //
  {path: 'about', component: AboutComponent }, // redireccionar al aboutcomponet.html //
  {path: 'item/:id', component: ItemComponent}, // redireccionar al itemcomponet.html //
  {path: 'search/:termino', component: SearchComponent}, // redireccionar al itemcomponet.html //
  {path: '**', pathMatch: 'full' , redirectTo: 'home'} // redireccionar a portafilocomponet.html //
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
