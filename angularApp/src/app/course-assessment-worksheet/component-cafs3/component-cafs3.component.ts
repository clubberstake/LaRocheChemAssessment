import { Component, OnInit, Input } from "@angular/core";
import { Cafs3Info } from "../cafs3";
import { CourseInformationObject } from "../course-information-object";

@Component({
  selector: "app-component-cafs3",
  templateUrl: "./component-cafs3.component.html",
  styleUrls: ["./component-cafs3.component.css"]
})
export class ComponentCafs3Component implements OnInit {
  @Input() courseInformationObjInput: CourseInformationObject;
  constructor() {}

  ngOnInit() {}
}
