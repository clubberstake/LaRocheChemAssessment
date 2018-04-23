import { TestBed, inject, async } from '@angular/core/testing';
import { CurrentClassInformationService } from './current-class-service';
import { CurrentClassInfo } from '../course-assessment-worksheet/currentClassInfo';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

fdescribe('CurrentClassServiceService', () => {
  let service: CurrentClassInformationService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CurrentClassInformationService]
    });

    service = TestBed.get(CurrentClassInformationService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return expected current classes', () => {
    const dummyPosts: CurrentClassInfo[] = [
      {
        classId: 1,
        courseId: 1,
        courseID: "",
        syllabus: null,
        section: "",
        semester: "",
        courseTitle: "",
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
        instructorName: ""
      }
    ];

    service.getCurrentClassInfo().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne(service.API_URL + "/currentClasses");
    expect(request.request.method).toBe("GET");
    request.flush(dummyPosts);

  });
});
