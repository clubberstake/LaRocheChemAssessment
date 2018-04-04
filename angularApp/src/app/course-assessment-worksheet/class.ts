import { FileStorage } from "../services/file-storage";

export class Classes {
    constructor(public courseId: number, public section: string, public semester: string, public instructorId: number) { }
  }