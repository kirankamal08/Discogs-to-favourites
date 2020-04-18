import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRecordComponent } from './find-record.component';

describe('FindRecordComponent', () => {
  let component: FindRecordComponent;
  let fixture: ComponentFixture<FindRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
