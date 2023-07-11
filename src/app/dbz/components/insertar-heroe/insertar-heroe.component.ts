import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-insertar-heroe',
  templateUrl: './insertar-heroe.component.html',
  styleUrls: ['./insertar-heroe.component.css']
})
export class InsertarHeroeComponent {
  public personajeLectura: Personaje = {
    id: '',
    nombre: '',
    poder: 0
  }

  @Output()
  personajeEmitir: EventEmitter<Personaje> = new EventEmitter();

  emitirPersonaje(): void {
    if (this.personajeLectura.nombre.length === 0) return;
    this.personajeEmitir.emit(this.personajeLectura);
    this.personajeLectura = { nombre: '', id: '', poder: 0 };
  }
}
