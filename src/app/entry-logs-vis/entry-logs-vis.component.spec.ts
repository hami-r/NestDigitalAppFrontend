import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryLogsVisComponent } from './entry-logs-vis.component';

describe('EntryLogsVisComponent', () => {
  let component: EntryLogsVisComponent;
  let fixture: ComponentFixture<EntryLogsVisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryLogsVisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryLogsVisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
