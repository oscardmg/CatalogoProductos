import { Component, } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  termino:string = undefined;

  constructor(
    private route: ActivatedRoute,
    public ps: ProductosService
  ) {
    route.params.subscribe( parametros => {


      this.termino = parametros["termino"];
      //console.log(this.termino);

      ps.buscar_producto(this.termino);

    });
  }


}
