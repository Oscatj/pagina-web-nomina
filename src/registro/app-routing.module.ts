import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { IndexComponent } from './components/index/index.component';
import {NosotrosComponent} from './components/nosotros/nosotros.component';
import {PreciosComponent} from './components/precios/precios.component';
import {ContactosComponent} from './components/contactos/contactos.component';

const routes: Routes = [
  //Opciones del navbar

  { path: 'home', component: HomeComponent },
  { path: 'registro', component: IndexComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }