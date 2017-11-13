import { Component} from '@angular/core';
import {ProductosService} from '../../services/productos.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html'
})
export class CatalogoComponent {

  constructor(
    public ps: ProductosService
  ) {  }



}
