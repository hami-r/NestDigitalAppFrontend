import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpApplyLeaveComponent } from './emp-apply-leave.component';

describe('EmpApplyLeaveComponent', () => {
  let component: EmpApplyLeaveComponent;
  let fixture: ComponentFixture<EmpApplyLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpApplyLeaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpApplyLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
