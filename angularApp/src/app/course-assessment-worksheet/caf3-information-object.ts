export class Caf3InformationObject {
    blah: string;
    Caf3: {
      course_pre_req: string;
      faculty: string;
      minor_capital_eq: string;
      pedagogy: string;
      student_asse: string;
      text_books: string;
      other: string;
    };
  
    constructor() {
      this.Caf3 = {
        course_pre_req: null,
        faculty: null,
        minor_capital_eq: null,
        pedagogy: null,
        student_asse: null,
        text_books: null,
        other: null
      };
    }
  }