import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllLogsSecComponent } from './view-all-logs-sec.component';

describe('ViewAllLogsSecComponent', () => {
  let component: ViewAllLogsSecComponent;
  let fixture: ComponentFixture<ViewAllLogsSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllLogsSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllLogsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
