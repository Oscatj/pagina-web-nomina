import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRegistrarseComponent } from './card-registrarse.component';

describe('CardRegistrarseComponent', () => {
  let component: CardRegistrarseComponent;
  let fixture: ComponentFixture<CardRegistrarseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRegistrarseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRegistrarseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
