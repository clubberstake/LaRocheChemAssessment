import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLearningRecordComponent } from './individual-learning-record.component';

describe('IndividualLearningRecordComponent', () => {
  let component: IndividualLearningRecordComponent;
  let fixture: ComponentFixture<IndividualLearningRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualLearningRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLearningRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
