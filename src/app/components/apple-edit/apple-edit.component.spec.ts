import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleEditComponent } from './apple-edit.component';

describe('AppleEditComponent', () => {
  let component: AppleEditComponent;
  let fixture: ComponentFixture<AppleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
