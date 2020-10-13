import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpEditComponent } from './hp-edit.component';

describe('HpEditComponent', () => {
  let component: HpEditComponent;
  let fixture: ComponentFixture<HpEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HpEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HpEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
