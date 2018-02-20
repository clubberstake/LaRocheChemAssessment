import { Component, OnInit, Input } from '@angular/core';
import { CourseInformationObject } from '../../course-information-object';
import { Cafs2Info } from '../../cafs2';
import { CurrentClassInformationService } from '../../../services/current-class-service';
import { CourseInformationService } from '../../../services/course-information-service.service';


@Component({
  selector: 'app-component-cafs2',
  templateUrl: './component-cafs2.component.html',
  styleUrls: ['./component-cafs2.component.css']
})

export class ComponentCafs2Component implements OnInit {
  @Input() courseInformationObjInput: CourseInformationObject;
  constructor(private courseInfoService: CourseInformationService, private currentClassInformationService: CurrentClassInformationService) { }

  ngOnInit() { 
}
}
