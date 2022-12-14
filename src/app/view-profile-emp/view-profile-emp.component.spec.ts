import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileEmpComponent } from './view-profile-emp.component';

describe('ViewProfileEmpComponent', () => {
  let component: ViewProfileEmpComponent;
  let fixture: ComponentFixture<ViewProfileEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfileEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
