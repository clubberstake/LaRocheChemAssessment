export class CourseInformationObject {
  blah: string;
  studentLearningOutcomes: {
    knowledgeBaseValue: boolean;
    labSkillsValue: boolean;
    practiceValue: boolean;
    societalConnectsValue: boolean;
    capstoneValue: boolean;
  };

  constructor() {
    this.studentLearningOutcomes = {
      knowledgeBaseValue: false,
      labSkillsValue: false,
      practiceValue: false,
      societalConnectsValue: false,
      capstoneValue: false
    };
  }
}
