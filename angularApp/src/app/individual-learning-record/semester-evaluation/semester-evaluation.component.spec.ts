import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemesterEvaluationComponent } from './semester-evaluation.component';

describe('SemesterEvaluationComponent', () => {
  let component: SemesterEvaluationComponent;
  let fixture: ComponentFixture<SemesterEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemesterEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemesterEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
