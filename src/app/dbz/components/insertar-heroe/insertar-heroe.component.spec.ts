import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarHeroeComponent } from './insertar-heroe.component';

describe('InsertarHeroeComponent', () => {
  let component: InsertarHeroeComponent;
  let fixture: ComponentFixture<InsertarHeroeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertarHeroeComponent]
    });
    fixture = TestBed.createComponent(InsertarHeroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
