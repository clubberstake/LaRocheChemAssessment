import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MidSemesterEvaluationComponent } from './mid-semester-evaluation.component';

describe('MidSemesterEvaluationComponent', () => {
  let component: MidSemesterEvaluationComponent;
  let fixture: ComponentFixture<MidSemesterEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MidSemesterEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MidSemesterEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
