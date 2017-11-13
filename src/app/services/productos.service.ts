import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ProductosService {

  public productos:any = [];
  public productos_filtrados:any = [];
  public cargando:boolean = true;
  public cargando_filtrados:boolean = true;

  constructor(
    public http: Http
  ) {

    this.cargar_productos();

  }

  public cargar_productos() {
    // https://catalogoproductos-33228.firebaseio.com/productos_idx.json

    let promesa = new Promise( (resolve, reject) => {
      if(this.productos.length === 0) {
        // lo voy hacer con promesa
        this.http.get('https://catalogoproductos-33228.firebaseio.com/productos_idx.json')
          .subscribe( res => {

            // setTimeout(() => {
            //   this.productos = res.json();
            //   this.cargando = false;
            // },1500);

            this.productos = res.json();
            this.cargando = false;

            resolve();
          });
      }
    });

    return promesa;
  }

  public cargar_producto(cod: string) {

    return this.http.get(`https://catalogoproductos-33228.firebaseio.com/productos/${cod}.json`);

  }

  public buscar_producto(termino: string) {

    this.cargando_filtrados = true;
    // hay que esperar que la data productos tenga informacion, pero cargar_productos devuelve una promesa

    if(this.productos.length === 0) {
      this.cargar_productos().then(() => {
        this.filtrar_productos(termino);
      });
    }else {
      this.filtrar_productos(termino);
    }
  }

  private filtrar_productos(termino:string) {
    // si termino coincide con titulo o categoria


    this.productos_filtrados = [];
    termino = termino.toLowerCase();


    this.productos.forEach( prod => {



      if(prod.categoria.toLowerCase().indexOf(termino) >= 0 ||  prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrados.push(prod);
      }
    });

    this.cargando_filtrados = false;
  }


}
