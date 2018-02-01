import { Component, OnInit } from '@angular/core';
import { CourseInfoForAssessment } from '../../courseInfoForAssessment';
import { CourseInformationService } from '../../../services/course-information-service.service';
import { CourseInformationObject } from '../../course-information-object';
import { NotesInfoForMiscNotesTab } from '../../../individual-learning-record/notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../../../services/notes-info-for-misc-notes-tab.service';

@Component({
  selector: 'app-course-assessment-course-information',
  templateUrl: './course-assessment-course-information.component.html',
  styleUrls: ['./course-assessment-course-information.component.css']
})
export class CourseAssessmentCourseInformationComponent implements OnInit {
  courseAndSection = new CourseInfoForAssessment('', '', '', ''); //console log is nasty without this.
  courseAndSections: CourseInfoForAssessment[] = [];

  setcourseAndSection(courseNumAndSection: any): void {
    this.courseAndSection = this.courseAndSections.find(
      value => value.courseNumAndSection === courseNumAndSection
    );
  }

  constructor(private courseInfoService: CourseInformationService, private notesService: NotesInfoForMiscNotesTabService) {
  }

  ngOnInit() {
    this.courseInfoService.getCourseInfo().subscribe((courses: CourseInfoForAssessment[]) => {
      this.courseAndSections = courses;
      console.log(this.courseAndSections);
      this.courseAndSection = this.courseAndSections[0];
    });
  }
}
