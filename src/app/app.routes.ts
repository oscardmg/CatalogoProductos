import {Routes, RouterModule} from '@angular/router';

import {
  AboutComponent,
  CatalogoComponent,
  ProductoComponent
} from './components/index.paginas';


export const app_routes: Routes = [
  {path: 'home', component: CatalogoComponent },
  {path: 'about', component: AboutComponent },
  {path: 'producto/:id', component: ProductoComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

// useHash:true para aumentar compatibilidad
export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
