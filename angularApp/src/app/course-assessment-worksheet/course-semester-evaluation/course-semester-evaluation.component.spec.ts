import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSemesterEvaluationComponent } from './course-semester-evaluation.component';

describe('CourseSemesterEvaluationComponent', () => {
  let component: CourseSemesterEvaluationComponent;
  let fixture: ComponentFixture<CourseSemesterEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSemesterEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSemesterEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
