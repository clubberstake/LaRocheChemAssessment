import { Component, OnInit, Input } from '@angular/core';
import { Cafs3Info } from '../../cafs3';
import { CAF3DisplayService } from '../../../services/caf3-display-service.service';
import { Caf3InformationObject } from '../../caf3-information-object';


@Component({
  selector: 'app-caf-section-3',
  templateUrl: './caf-section-3.component.html',
  styleUrls: ['./caf-section-3.component.css']
})
export class CourseAssessmentCaf3 implements OnInit {
        @Input() caf3Input: Caf3InformationObject;
      
        constructor() {}
      
        ngOnInit() {}
      
        course_pre_req(value: string) {
          this.caf3Input.Caf3.course_pre_req = value;
          console.log(this.caf3Input);
        }
      
        faculty(value: string) {
          this.caf3Input.Caf3.faculty = value;
          console.log(this.caf3Input);
        }
      
        minor_capital_eq(value: string) {
          this.caf3Input.Caf3.minor_capital_eq = value;
          console.log(this.caf3Input);
        }
      
        pedagogy(value: string) {
          this.caf3Input.Caf3.pedagogy = value;
          console.log(this.caf3Input);
        }
      
        student_asse(value: string) {
          this.caf3Input.Caf3.student_asse = value;
          console.log(this.caf3Input);
        }
        text_books(value: string) {
            this.caf3Input.Caf3.text_books = value;
            console.log(this.caf3Input);
        }
        other(value: string) {
            this.caf3Input.Caf3.other = value;
            console.log(this.caf3Input);
        }
}