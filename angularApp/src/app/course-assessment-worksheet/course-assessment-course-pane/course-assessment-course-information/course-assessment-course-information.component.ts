import { Component, OnInit, Input } from '@angular/core';
import { CourseInfoForAssessment } from '../../courseInfoForAssessment';
import { CourseInformationService } from '../../../services/course-information-service.service';
import { CourseInformationObject } from '../../course-information-object';
import { NotesInfoForMiscNotesTab } from '../../../individual-learning-record/notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../../../services/notes-info-for-misc-notes-tab.service';
import { ClassInfo } from '../../../course-assessment-worksheet/classInfo'
import { ClassInformationService } from '../../../services/class-service.service'
import { CurrentClassInfo } from '../../../course-assessment-worksheet/currentClassInfo'
import { CurrentClassInformationService } from '../../../services/current-class-service'

@Component({
  selector: 'app-course-assessment-course-information',
  templateUrl: './course-assessment-course-information.component.html',
  styleUrls: ['./course-assessment-course-information.component.css']
})
export class CourseAssessmentCourseInformationComponent implements OnInit {
  @Input() courseInformationObjInput: CourseInformationObject;
  courseAndSections: CurrentClassInfo[] = [];

  setcourseAndSection(courseNumAndSection: any): void {
    this.courseInformationObjInput.CurrentClassInfo = this.courseAndSections.find(
      value => value.courseID === courseNumAndSection
    );
  }

  constructor(private courseInfoService: CourseInformationService, private notesService: NotesInfoForMiscNotesTabService, private classInformationService: ClassInformationService, private currentClassInformationService: CurrentClassInformationService) {
  }

  ngOnInit() {
    this.courseInformationObjInput.CurrentClassInfo = new CurrentClassInfo('', null, '', '', ''); //console log is nasty without this.

    this.currentClassInformationService.getCurrentClassInfo().subscribe((courses: CurrentClassInfo[]) => {
      this.courseAndSections = courses;
      console.log(this.courseAndSections);
      if (this.courseAndSections.length > 0) {
        this.courseInformationObjInput.CurrentClassInfo = this.courseAndSections[0];
      }
    });
  }
}
