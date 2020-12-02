import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllComponent } from './componentes/all/all.component';
import { ProductoComponent } from './componentes/producto/producto.component';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/all', component: AllComponent },
  { path: 'productos/:id', component: ProductoComponent },
  {
    path: '**',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
