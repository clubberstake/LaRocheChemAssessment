import { Component, OnInit, Input } from "@angular/core";
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from "../studentInfoForBioAndAdmissionsPlacementTabResponse";
import { StudentInfoForBioAndAdmissionsPlacementTabService } from "../../services/student-info-for-bio-and-admissions-placement-tab.service";
import { IndividualLearningRecordObject } from "../individual-learning-record-object";
import { FileStorage } from "../../services/file-storage";
import { FileStorageService } from "../../services/file-storage.service";
import Swal from 'sweetalert2';

@Component({
  selector: "app-student-pane",
  templateUrl: "./student-pane.component.html",
  styleUrls: ["./student-pane.component.css"]
})
export class StudentPaneComponent implements OnInit {
  selectedPhoto: File = null;

  @Input() studentObjectInput: IndividualLearningRecordObject;

  majors = ["Chemistry", "Biochemistry", "Other"];
  years = ["Sophomore", "Junior", "Senior"];
  semesters = ["Fall", "Spring", "Summer"];
  grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];

  constructor(
    private studentService: StudentInfoForBioAndAdmissionsPlacementTabService,
    private fileStorageService: FileStorageService  ) {}

  ngOnInit() {}

  onFileSelected(event) {
    this.selectedPhoto = <File>event.target.files[0];
    this.onUpdateStudent(); //autosave just in case
    console.log(event);
  }

  onUpdateStudent() {
    Swal( "Oops" ,  "Something went wrong!" ,  "error" );
    var fileReader = new FileReader();
    var fileStorage = new FileStorage(0, "", "");
    if (fileReader && this.selectedPhoto) {
      fileStorage.fileName = this.selectedPhoto.name;
      fileReader.onload = function() {
        fileStorage.fileContent = fileReader.result.toString();
      };

      fileReader.readAsDataURL(this.selectedPhoto);
      this.sleep(300).then(() => {
        this.studentObjectInput.student.file = {
          id: this.studentObjectInput.student.file
            ? this.studentObjectInput.student.file.id
            : 0,
          fileContent: fileStorage.fileContent,
          fileName: fileStorage.fileName
        };
      });
    }
    
    this.studentObjectInput.student.id = this.studentObjectInput.studentId;
    console.log(this.studentObjectInput);
    this.studentService.updateStudent(this.studentObjectInput.student);
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
