import { Component, OnInit, Input } from '@angular/core';
import { CourseInformationObject } from '../../course-information-object';


@Component({
  selector: 'app-component-cafs4',
  templateUrl: './component-cafs4.component.html',
  styleUrls: ['./component-cafs4.component.css']
})

export class ComponentCafs4Component implements OnInit {
  @Input() courseInformationObjInput: CourseInformationObject;

  constructor() { }

  ngOnInit() {}
}
