import { Component, OnInit, Input } from "@angular/core";
import { StudentInfoForBioAndAdmissionsPlacementTabResponse } from "../studentInfoForBioAndAdmissionsPlacementTabResponse";
import { StudentInfoForBioAndAdmissionsPlacementTabService } from "../../services/student-info-for-bio-and-admissions-placement-tab.service";
import { IndividualLearningRecordObject } from "../individual-learning-record-object";
import { FileStorage } from "../../services/file-storage";
import { FileStorageService } from "../../services/file-storage.service";
import Swal from 'sweetalert2';
import { userObject } from "../../userObject";

@Component({
  selector: "app-student-pane",
  templateUrl: "./student-pane.component.html",
  styleUrls: ["./student-pane.component.css"]
})
export class StudentPaneComponent implements OnInit {
  selectedPhoto: File = null;

  @Input() studentObjectInput: IndividualLearningRecordObject;
  @Input() userObject: userObject; // Initilizing User Object
  time = new Date(); // Initializing Time
  month: number; // Decalring the month type
  currentdate = this.time.getUTCMonth() + '/' + this.time.getUTCDate() + '/' + this.time.getUTCFullYear()
 
  majors = ["Chemistry", "Biochemistry", "Other"];
  years = ["Sophomore", "Junior", "Senior"];
  semesters = ["Fall", "Spring", "Summer"];
  grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F"];

  constructor(
    private studentService: StudentInfoForBioAndAdmissionsPlacementTabService,
    private fileStorageService: FileStorageService  ) {}

  ngOnInit() {
    this.studentObjectInput.student.file = new FileStorage(0,'','');
  }

  onFileSelected(event) {
    this.selectedPhoto = <File>event.target.files[0];
    this.onUpdateStudent(); //autosave just in case
    console.log(event);
  }

  onUpdateStudent() {
    this.month = this.time.getUTCMonth() + 1;
    this.studentObjectInput.student.time = this.month + "/" + this.time.getUTCDate() + "/" + this.time.getUTCFullYear();
    this.studentObjectInput.student.author = this.userObject.user.username;
    var fileReader = new FileReader();
    var fileStorage = new FileStorage(0, "", "", "");
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
          fileName: fileStorage.fileName,
          fileType: fileStorage.fileType
        };
      });
    }
    else{
      this.studentObjectInput.student.file = new FileStorage(0,'','');      
    }

    this.studentObjectInput.student.id = this.studentObjectInput.studentId;
    console.log(this.studentObjectInput);
    this.studentService.updateStudent(this.studentObjectInput.student);
    // Swal({
    //   type: 'success',
    //   title: 'Student Updated!',
    //   showConfirmButton: false,
    //   timer: 1500
    // })
  }

  private sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
