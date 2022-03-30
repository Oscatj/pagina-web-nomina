import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRegistrarseComponent } from './emp-registrarse.component';

describe('EmpRegistrarseComponent', () => {
  let component: EmpRegistrarseComponent;
  let fixture: ComponentFixture<EmpRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpRegistrarseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
