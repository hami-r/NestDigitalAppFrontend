import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSecurityguardComponent } from './view-securityguard.component';

describe('ViewSecurityguardComponent', () => {
  let component: ViewSecurityguardComponent;
  let fixture: ComponentFixture<ViewSecurityguardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSecurityguardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSecurityguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
