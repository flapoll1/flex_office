import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationListComponent } from './workstation-list.component';

describe('WorkstationListComponent', () => {
  let component: WorkstationListComponent;
  let fixture: ComponentFixture<WorkstationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkstationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
