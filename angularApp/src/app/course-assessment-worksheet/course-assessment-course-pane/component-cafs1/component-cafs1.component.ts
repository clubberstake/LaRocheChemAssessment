import { Component, OnInit, Input } from '@angular/core';
import { CourseInformationObject } from '../../course-information-object';

@Component({
  selector: 'app-component-cafs1',
  templateUrl: './component-cafs1.component.html',
  styleUrls: ['./component-cafs1.component.css']
})
export class ComponentCafs1Component implements OnInit {
  @Input() courseInformationObjInput: CourseInformationObject;

  constructor() { }

  ngOnInit() {
  }

}
