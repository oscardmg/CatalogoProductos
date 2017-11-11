import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any = [];
  cargando:boolean = true;

  constructor(
    public http: Http
  ) {

    this.cargar_productos();

  }

  public cargar_productos() {
    // https://catalogoproductos-33228.firebaseio.com/productos_idx.json

    if(this.productos.length == 0) {
      // lo voy hacer con promesa
      this.http.get('https://catalogoproductos-33228.firebaseio.com/productos_idx.json')
        .subscribe( res => {
          // console.log(res.json());
          this.productos = res.json();
          this.cargando = false;
        });
    }
  }

}
