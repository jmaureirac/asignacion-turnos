import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarEventoComponent } from './ingresar-evento.component';

describe('IngresarEventoComponent', () => {
  let component: IngresarEventoComponent;
  let fixture: ComponentFixture<IngresarEventoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarEventoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
