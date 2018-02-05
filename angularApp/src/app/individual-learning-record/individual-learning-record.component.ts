import { Component, OnInit } from '@angular/core';
import { NotesInfoForMiscNotesTab } from './notesInfoForMiscNotesTab';
import { NotesInfoForMiscNotesTabService } from '../services/notes-info-for-misc-notes-tab.service';
import { StudentInfoForBioAndAdmissionsPlacementTab } from './studentInfoForBioAndAdmissionsPlacementTab';
import { StudentInfoForBioAndAdmissionsPlacementTabService } from '../services/student-info-for-bio-and-admissions-placement-tab.service';

@Component({
  selector: 'app-individual-learning-record',
  templateUrl: './individual-learning-record.component.html',
  styleUrls: ['./individual-learning-record.component.css']
})
export class IndividualLearningRecordComponent implements OnInit {

  studentId: any;
  studentName: string;
  studentMajor: string;
  studentYear: string;
  studentSemester: string;
  studentMathGrade: string;
  studentAthletics: string;
  studentHousingStatus: string;
  studentHonors: string;
  studentInternational: string;
  studentPhoto: string;
  studentTime: string;

  student: StudentInfoForBioAndAdmissionsPlacementTab;
  students: StudentInfoForBioAndAdmissionsPlacementTab[];

  miscNote: NotesInfoForMiscNotesTab;
  miscNotes: NotesInfoForMiscNotesTab[] = [];

  constructor(private notesService: NotesInfoForMiscNotesTabService, private studentsService: StudentInfoForBioAndAdmissionsPlacementTabService) {
  }

  ngOnInit() {
    this.notesService.getMiscNoteInfo().subscribe((miscNotes: NotesInfoForMiscNotesTab[]) => {
      this.miscNotes = miscNotes;
      console.log(this.miscNotes);
      this.miscNote = this.miscNotes[0];
    });
  }

  onSearch(studentId: any) {
    // this.studentsService.getStudentInfo().subscribe((students: StudentInfoForBioAndAdmissionsPlacementTab[]) => {
    //   this.students = students;
    //   this.studentName = students[0].studentName;
    //   this.studentMajor = students[0].studentMajor;
    //   this.studentYear = students[0].studentYear;
    //   this.studentSemester = students[0].studentSemester;
    //   this.studentMathGrade = students[0].studentMathGrade;
    //   this.studentAthletics = students[0].studentAthletics;
    //   this.studentHousingStatus = students[0].studentHousingStatus;
    //   this.studentHonors = students[0].studentHonors;
    //   this.studentInternational = students[0].internationalStudent;
    //   this.studentPhoto = students[0].studentPhoto;
    //   this.studentTime = students[0].time;
    // });

    this.studentsService.getStudentInfoById(studentId).subscribe((student: StudentInfoForBioAndAdmissionsPlacementTab) => {
      this.studentName = student.studentName;
      this.studentMajor = student.studentMajor;
      this.studentYear = student.studentYear;
      this.studentSemester = student.studentSemester;
      this.studentMathGrade = student.studentMathGrade;
      this.studentAthletics = student.studentAthletics;
      this.studentHousingStatus = student.studentHousingStatus;
      this.studentHonors = student.studentHonors;
      this.studentInternational = student.internationalStudent;
      this.studentPhoto = student.studentPhoto;
      this.studentTime = student.time;
    });

    this.studentId = studentId;
    console.log(this.studentId);
  }

}
