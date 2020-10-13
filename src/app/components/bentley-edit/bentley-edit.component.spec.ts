import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentleyEditComponent } from './bentley-edit.component';

describe('BentleyEditComponent', () => {
  let component: BentleyEditComponent;
  let fixture: ComponentFixture<BentleyEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BentleyEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BentleyEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
