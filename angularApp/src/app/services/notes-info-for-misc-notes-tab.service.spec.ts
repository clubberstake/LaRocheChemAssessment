import { TestBed, inject } from '@angular/core/testing';

import { NotesInfoForMiscNotesTabService } from './notes-info-for-misc-notes-tab.service';
import {HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import {NotesInfoForMiscNotesTab} from "..//individual-learning-record/notesInfoForMiscNotesTab"

fdescribe('NotesInfoForMiscNotesTabService', () => {
  let service: NotesInfoForMiscNotesTabService;
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NotesInfoForMiscNotesTabService]
    });
    service = TestBed.get(NotesInfoForMiscNotesTabService)
    mockHttp = TestBed.get(HttpTestingController)
  });

  afterEach(() =>{
    mockHttp.verify();
  })
  it('the service should return a proper studentName, time, Notes, and author', inject([NotesInfoForMiscNotesTabService], (service: NotesInfoForMiscNotesTabService) => {
    const dummynotesInfoForMiscNotesTabRequest: NotesInfoForMiscNotesTab[] = [
      {
        notes: "",
        author: "",
        studentId: 1,
        time: ""
      }];

    const dummyReviewBystudentName: NotesInfoForMiscNotesTab = {
      notes: "",
      author: "",
      studentId: 1,
      time: ""
    }
    const dummyReviewBystudentNames: NotesInfoForMiscNotesTab = {
      notes: "",
      author: "",
      studentId: 1,
      time: ""
    }


   service.getMiscNoteInfo().subscribe(NotesInfoForMiscNotesTabInfo => {
    expect(NotesInfoForMiscNotesTabInfo.length).toBeGreaterThan(0);
    expect(NotesInfoForMiscNotesTabInfo).toEqual(dummynotesInfoForMiscNotesTabRequest);
  });
    const getdummynotesInfoForMiscNotesTabRequest = mockHttp.expectOne("http://localhost:8080/notes/notesInfoForMiscNotesTab");
  expect(getdummynotesInfoForMiscNotesTabRequest.request.method).toBe("GET");
  getdummynotesInfoForMiscNotesTabRequest.flush(getdummynotesInfoForMiscNotesTabRequest);

   
  service.addNewNote(dummyReviewBystudentName);
  const putdummynotesInforForMiscNotesTabRequest = mockHttp.expectOne("http://localhost:8080/notes/notesInfoForMiscNotesTab/studentId=");
  expect(putdummynotesInforForMiscNotesTabRequest.request.method).toBe("POST");

  service.addNewNote(dummyReviewBystudentNames);
  const putdummynotesInforForMiscNotesTabRequests = mockHttp.expectOne("http://localhost:8080/notes/addNote");
  expect(putdummynotesInforForMiscNotesTabRequests.request.method).toBe("POST");
  }));
});
