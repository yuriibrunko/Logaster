import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BentleyComponent } from './bentley.component';

describe('BentleyComponent', () => {
  let component: BentleyComponent;
  let fixture: ComponentFixture<BentleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BentleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BentleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
