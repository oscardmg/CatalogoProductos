import { Component, } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'
})
export class ProductoComponent {

  producto: any = undefined;
  cod:string = undefined;

  constructor(
    private route: ActivatedRoute,
    private ps: ProductosService
  ) {

    route.params.subscribe(parametros => {
      // console.log(parametros);
      // console.log(parametros['id']);
      this.cod = parametros['id'];

      ps.cargar_producto(this.cod)
        .subscribe( res => {
          // console.log(res.json());

          this.producto = res.json();
          console.log(this.producto);
        });

    });

  }

}
