import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Scrin1Component } from './scrin1.component';

describe('Scrin1Component', () => {
  let component: Scrin1Component;
  let fixture: ComponentFixture<Scrin1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Scrin1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Scrin1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
