import { TestBed, inject } from '@angular/core/testing';

import { ClassInformationService } from './class-service.service';
import { ClassInfo } from "../course-assessment-worksheet/classInfo";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

fdescribe("When creating the Class Service", () => {
  let service: ClassInformationService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClassInformationService]
    });

    service = TestBed.get(ClassInformationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });


  it("should return two Class Info blocks (HttpClient called once)", () => {
      const samplePosts: ClassInfo[] = [
        {
          classId: 1,
          courseId: 1,
          courseID: "",
          syllabus: null,
          section: "",
          semester: "",
          courseTitle: "",
          instructorId: 1,
          instructorName: ""
        },
        {
          classId: 2,
          courseId: 2,
          courseID: "",
          syllabus: null,
          section: "",
          semester: "",
          courseTitle: "",
          instructorId: 2,
          instructorName: ""
        }
      ];
  
      service.getClassInfo().subscribe(posts => {
        expect(posts.length).toBe(2);
        expect(posts).toEqual(samplePosts);
      });
  
      const request = httpMock.expectOne(service.API_URL + "/classInfo");
      expect(request.request.method).toBe("GET");
      request.flush(samplePosts);
    });
  });
