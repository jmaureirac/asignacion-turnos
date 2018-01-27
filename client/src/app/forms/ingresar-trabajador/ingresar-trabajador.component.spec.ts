import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarTrabajadorComponent } from './ingresar-trabajador.component';

describe('IngresarTrabajadorComponent', () => {
  let component: IngresarTrabajadorComponent;
  let fixture: ComponentFixture<IngresarTrabajadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresarTrabajadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
