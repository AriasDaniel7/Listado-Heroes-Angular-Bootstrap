import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent {
  public year: Date = new Date();

  constructor(private dbzService: DbzService) { }

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  recibirPersonaje(personaje: Personaje): void{
    this.dbzService.agregarPersonaje(personaje);
  }

  recibirId(id: string): void{
    this.dbzService.eliminarPersonaje(id);
  }

  calcularYear(): string {
    return this.year.getUTCFullYear().toString();
  }
}
