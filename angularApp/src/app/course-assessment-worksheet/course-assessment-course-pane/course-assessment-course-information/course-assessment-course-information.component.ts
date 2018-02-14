import { Component, OnInit } from '@angular/core';
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
  courseAndSection = new CurrentClassInfo('', null, '', '', ''); //console log is nasty without this.
  courseAndSections: CurrentClassInfo[] = [];

  setcourseAndSection(courseNumAndSection: any): void {
    this.courseAndSection = this.courseAndSections.find(
      value => value.courseID === courseNumAndSection
    );
  }

  constructor(private courseInfoService: CourseInformationService, private notesService: NotesInfoForMiscNotesTabService, private classInformationService: ClassInformationService, private currentClassInformationService: CurrentClassInformationService) {
  }

  ngOnInit() {
    this.currentClassInformationService.getCurrentClassInfo().subscribe((courses: CurrentClassInfo[]) => {
      this.courseAndSections = courses;
      console.log(this.courseAndSections);
      this.courseAndSection = this.courseAndSections[0];
    });
  }
}
