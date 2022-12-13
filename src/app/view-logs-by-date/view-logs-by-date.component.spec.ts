import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLogsByDateComponent } from './view-logs-by-date.component';

describe('ViewLogsByDateComponent', () => {
  let component: ViewLogsByDateComponent;
  let fixture: ComponentFixture<ViewLogsByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLogsByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLogsByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
