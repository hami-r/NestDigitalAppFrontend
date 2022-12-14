import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileSecGuardComponent } from './view-profile-sec-guard.component';

describe('ViewProfileSecGuardComponent', () => {
  let component: ViewProfileSecGuardComponent;
  let fixture: ComponentFixture<ViewProfileSecGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProfileSecGuardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileSecGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
