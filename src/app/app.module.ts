// modulos //
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// rutas de la aplicacion //
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafilioComponent } from './pages/portafilio/portafilio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafilioComponent,
    AboutComponent,
    ItemComponent
  ],
  // en imports se importan los modulos //
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // en providers se importan los servcios a un que esto ya no es necesario//
  // puesto que ahora en el servicio se crea @Injectable donde se expesifica //
  // el nivel de alcance del servicio//
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
