import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './components/registro/registro.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {AppRoutingModule} from './app-routing.module';
import { AppRoutingPanelModule } from './app-routing-panel.module';

import { CardRegistrarseComponent } from './components/card-registrarse/card-registrarse.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PreciosComponent } from './components/precios/precios.component';
import { PanelUsuarioComponent } from './components/panel-usuario/panel-usuario.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { InicioComponent } from './components/opciones_menu/inicio/inicio.component';
import { EmpRegistrarseComponent } from './components/opciones_menu/empleados/emp-registrarse/emp-registrarse.component';
import { ListEmpleadosComponent } from './components/opciones_menu/empleados/list-empleados/list-empleados.component';
import { InactivosEmpleadosComponent } from './components/opciones_menu/empleados/inactivos-empleados/inactivos-empleados.component';

@NgModule({
  declarations: [
    RegistroComponent,
    CardRegistrarseComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    HomeComponent,
    NosotrosComponent,
    PreciosComponent,
    PanelUsuarioComponent,
    ContactosComponent,
    InicioComponent,
    EmpRegistrarseComponent,
    ListEmpleadosComponent,
    InactivosEmpleadosComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    AppRoutingModule,
    AppRoutingPanelModule
    
  ],
  exports:[
    AppRoutingModule,
    AppRoutingPanelModule,
    NavbarComponent,
    FooterComponent,
  ]
})
export class RegistroModule { }
