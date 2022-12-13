import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSecurityguardComponent } from './add-securityguard.component';

describe('AddSecurityguardComponent', () => {
  let component: AddSecurityguardComponent;
  let fixture: ComponentFixture<AddSecurityguardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSecurityguardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSecurityguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
