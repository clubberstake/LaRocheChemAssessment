import { Component, OnInit } from '@angular/core';
import { NotesInfoForMiscNotesTab } from './notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from './studentInfoForBioAndAdmissionsPlacementTab';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../services/student-info-for-bio-and-admissions-placement-tab.service';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-individual-learning-record',
  templateUrl: './individual-learning-record.component.html',
  styleUrls: ['./individual-learning-record.component.css']
})
export class IndividualLearningRecordComponent implements OnInit {

  studentId: any;
  student: StudentInfoForBioAndAdmissionsPlacementTab = new StudentInfoForBioAndAdmissionsPlacementTab('', '', '', '', '', '', '', '', '', '', '');
  students: StudentInfoForBioAndAdmissionsPlacementTab[];

  constructor(private studentsService: StudentInfoForBioAndAdmissionsPlacementTabService) {
  }

  ngOnInit() {
  }

  onSearch(studentId: any) {
    this.studentsService.getStudentInfoById(studentId).subscribe((student: StudentInfoForBioAndAdmissionsPlacementTab) => {
      this.student = student;
    });

    this.studentId = studentId;
    console.log(this.studentId);
  }

  /*onAddStudent() {
    var addStudent = {
      id: 1,
      studentName: 'asdf',
      studentMajor: 'Math',
      studentYear: '9999',
      studentSemester: 'Summer'
    };

    this.studentsService.addNewStudent(addStudent);
  }*/

}
