import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveCourseInformationComponent } from './archive-course-information.component';

describe('ArchiveCourseInformationComponent', () => {
  let component: ArchiveCourseInformationComponent;
  let fixture: ComponentFixture<ArchiveCourseInformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveCourseInformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveCourseInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
