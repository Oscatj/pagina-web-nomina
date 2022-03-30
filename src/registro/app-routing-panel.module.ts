import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './components/opciones_menu/inicio/inicio.component';
import { EmpRegistrarseComponent } from './components/opciones_menu/empleados/emp-registrarse/emp-registrarse.component';

const routesPanel: Routes = [
  //Opciones del panel:

  {path:'Inicio',component:InicioComponent},
  {path:'Registro',component:EmpRegistrarseComponent},
  {path:'**',pathMatch:'full',redirectTo:'Inicio'}, 

]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routesPanel,{useHash:true})],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingPanelModule { }
