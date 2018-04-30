import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NotesInfoForMiscNotesTab } from '../individual-learning-record/notesInfoForMiscNotesTab';

@Injectable()
export class NotesInfoForMiscNotesTabService {

  constructor(private http: HttpClient) { }
  public getMiscNoteInfo(): Observable<NotesInfoForMiscNotesTab[]> {
    console.log('Made it to Misc Notes service');
    return this.http.get<NotesInfoForMiscNotesTab[]>("http://localhost:8080/notes/notesInfoForMiscNotesTab");
  }

  public getMiscNoteInfoByStudentId(studentId: number): Observable<NotesInfoForMiscNotesTab[]> {
    return this.http.get<NotesInfoForMiscNotesTab[]>("http://localhost:8080/notes/notesInfoForMiscNotesTab/studentId=" + studentId);
  }

  public addNewNote(note: any) {
    return this.http.post<Response>('http://localhost:8080/notes/addNote', note).subscribe(res => console.log(res));
  }
}
