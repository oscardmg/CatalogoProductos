import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { app_routing } from './app.routes';

// Servicios
import {InformacionService} from './services/informacion.service';


// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AboutComponent } from './components/about/about.component';
import { ProductoComponent } from './components/producto/producto.component';
import {HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CatalogoComponent,
    AboutComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InformacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
