import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpLeavComponent } from './view-emp-leav.component';

describe('ViewEmpLeavComponent', () => {
  let component: ViewEmpLeavComponent;
  let fixture: ComponentFixture<ViewEmpLeavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpLeavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmpLeavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
