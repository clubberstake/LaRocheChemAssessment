import { FileStorage } from "../services/file-storage";

export class ClassInfo {
    constructor(public classId: number, public courseId: number, public courseID: string, public syllabus: FileStorage, public section: string, public semester: string, public courseTitle: string, public instructorId: number, public instructorName: string) { }
  }