import { Component } from '@angular/core';
import {InformacionService} from '../../services/informacion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(
    public is: InformacionService,
    private router: Router
  ) {

  }

  /**
   * Cuando le presionen enter al buscador , este va disparar este metodo
   * para navergar a otro sitio y cargar la pagina del search
   * @param {string} termino
   */
  public buscar_producto(termino:string) {
    console.log(termino);

    this.router.navigate(['search', termino]);

  }
}

