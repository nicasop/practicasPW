import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GastosComponent } from './gastos/gastos.component';
import { ReporteComponent } from './reporte/reporte.component';

import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

const rutas:Route[]=[
  {path: 'informacion', component:GastosComponent},
  {path: 'registro', component:FormularioComponent},
  {path: 'reporte', component:ReporteComponent}
]; 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormularioComponent,
    GastosComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

 