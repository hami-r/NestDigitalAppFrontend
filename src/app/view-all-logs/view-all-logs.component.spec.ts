import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLogsComponent } from './view-all-logs.component';

describe('ViewAllLogsComponent', () => {
  let component: ViewAllLogsComponent;
  let fixture: ComponentFixture<ViewAllLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
