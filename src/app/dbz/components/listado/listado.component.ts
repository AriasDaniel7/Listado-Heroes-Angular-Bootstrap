import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  @Input()
  public personajeListado: Personaje[] = [
    {
      id: 'd',
      nombre: 'a',
      poder: 1
    }
  ];

  @Output()
  idRecibido: EventEmitter<string> = new EventEmitter();

  tomarId(id: string): void {
    this.idRecibido.emit(id);
  }
}
