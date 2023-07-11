import { Injectable } from '@angular/core';

import { Personaje } from '../interfaces/personaje.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public personajes: Personaje[] = [
    {
      id: uuid(),
      nombre: 'Krillin',
      poder: 1000
    },
    {
      id: uuid(),
      nombre: 'Goku',
      poder: 9500
    },
    {
      id: uuid(),
      nombre: 'Vegeta',
      poder: 7500
    },
  ];

  agregarPersonaje(personaje: Personaje): void {
    const nuevoPersonaje = { ...personaje, id: uuid() };
    this.personajes.push(nuevoPersonaje);
  }

  eliminarPersonaje(id: string): void{
    this.personajes = this.personajes.filter( personaje => personaje.id != id);
  }
}
