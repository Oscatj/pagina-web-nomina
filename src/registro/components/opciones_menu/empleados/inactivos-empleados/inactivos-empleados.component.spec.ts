import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactivosEmpleadosComponent } from './inactivos-empleados.component';

describe('InactivosEmpleadosComponent', () => {
  let component: InactivosEmpleadosComponent;
  let fixture: ComponentFixture<InactivosEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactivosEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InactivosEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
