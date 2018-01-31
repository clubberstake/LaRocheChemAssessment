import { TestBed, inject } from '@angular/core/testing';

import { NotesInfoForMiscNotesTabService } from './notes-info-for-misc-notes-tab.service';

describe('NotesInfoForMiscNotesTabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotesInfoForMiscNotesTabService]
    });
  });

  it('should be created', inject([NotesInfoForMiscNotesTabService], (service: NotesInfoForMiscNotesTabService) => {
    expect(service).toBeTruthy();
  }));
});
