import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecGuardNavbarComponent } from './sec-guard-navbar.component';

describe('SecGuardNavbarComponent', () => {
  let component: SecGuardNavbarComponent;
  let fixture: ComponentFixture<SecGuardNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecGuardNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecGuardNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
