import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitsuEditComponent } from './mitsu-edit.component';

describe('MitsuEditComponent', () => {
  let component: MitsuEditComponent;
  let fixture: ComponentFixture<MitsuEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitsuEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MitsuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
