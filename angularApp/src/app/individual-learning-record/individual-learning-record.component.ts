import { Component, OnInit } from '@angular/core';
import { NotesInfoForMiscNotesTab } from './notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from './studentInfoForBioAndAdmissionsPlacementTab';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../services/student-info-for-bio-and-admissions-placement-tab.service';
import { Response } from '@angular/http/src/static_response';
import { IndividualLearningRecordObject } from './individual-learning-record-object';
import { SemesterEvaluationService } from '../services/semester-evaluation.service';
import { SemesterReviewResponse } from './SemesterReviewResponse';
import { SemesterReviewRequest } from './SemesterReviewRequest';
import { CourseInformationObject } from '../course-assessment-worksheet/course-information-object';

@Component({
  selector: 'app-individual-learning-record',
  templateUrl: './individual-learning-record.component.html',
  styleUrls: ['./individual-learning-record.component.css']
})
export class IndividualLearningRecordComponent implements OnInit {

  // ILR Object at the root level which will now hold a reference to student and student's miscNotes.
  ilrStudentObject: IndividualLearningRecordObject = new IndividualLearningRecordObject();
  courseInformationObject: CourseInformationObject = new CourseInformationObject();

  constructor(private studentsService: StudentInfoForBioAndAdmissionsPlacementTabService, private notesService: NotesInfoForMiscNotesTabService,
    private semesterEvaluationService: SemesterEvaluationService) {}

  ngOnInit() {
  }

  onSearchById(studentId: any) {
    this.studentsService.getStudentInfoById(studentId).subscribe((student: StudentInfoForBioAndAdmissionsPlacementTab) => {
      this.ilrStudentObject.student = student;
      console.log(this.ilrStudentObject.student);
    });

    this.notesService.getMiscNoteInfoByStudentId(studentId).subscribe((miscNotes: NotesInfoForMiscNotesTab[]) => {
      this.ilrStudentObject.miscNotes = miscNotes;
      console.log(this.ilrStudentObject.miscNotes);
    });

    this.semesterEvaluationService.getSemesterEvaluationsByStudentId(studentId).subscribe((semesterReview: SemesterReviewRequest) => {
      this.ilrStudentObject.semesterReviewRequest = semesterReview;
      console.log(this.ilrStudentObject.semesterReviewRequest);
    });

    this.ilrStudentObject.studentId = studentId;
    console.log(this.ilrStudentObject.studentId);
  }

  /*To be worked on later*/
  onSearchByName(studentName: any) {
    console.log(studentName);
  }
}
