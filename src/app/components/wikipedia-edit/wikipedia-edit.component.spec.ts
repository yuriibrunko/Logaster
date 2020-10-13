import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WikipediaEditComponent } from './wikipedia-edit.component';

describe('WikipediaEditComponent', () => {
  let component: WikipediaEditComponent;
  let fixture: ComponentFixture<WikipediaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WikipediaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WikipediaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
