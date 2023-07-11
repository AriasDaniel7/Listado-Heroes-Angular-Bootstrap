import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { InsertarHeroeComponent } from './components/insertar-heroe/insertar-heroe.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainPageComponent
  ],
  declarations: [
    MainPageComponent,
    ListadoComponent,
    InsertarHeroeComponent
  ],
})

export class DbzModule { }
