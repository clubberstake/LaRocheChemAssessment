import { Component, OnInit, Input } from '@angular/core';
import { CourseInformationObject } from "../course-information-object";


@Component({
  selector: 'app-component-cafs6',
  templateUrl: './component-cafs6.component.html',
  styleUrls: ['./component-cafs6.component.css']
})

export class ComponentCafs6Component implements OnInit {
  @Input() courseInformationObjInput: CourseInformationObject;
  constructor() { }

  ngOnInit() {}
}
