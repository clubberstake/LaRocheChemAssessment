package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CourseAssessmentFormSection4 {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long classId;
	private int section4Num;
	private int idNum;
	private String learningIssue;
	private String extentInstructor;
	private String InstructorRecommendations;
	
	public CourseAssessmentFormSection4() {}

	public CourseAssessmentFormSection4(long classId, int section4Num, int idNum, String learningIssue, String extentInstructor,
			String instructorRecommendations) {
		this.classId = classId;
		this.section4Num = section4Num;
		this.idNum = idNum;
		this.learningIssue = learningIssue;
		this.extentInstructor = extentInstructor;
		this.InstructorRecommendations = instructorRecommendations;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	public long getClassId() {
		return classId;
	}
	public void setClassId(long classId) {
		this.classId = classId;
	}
	public int getSection4Num() {
		return section4Num;
	}

	public void setSection4Num(int section4Num) {
		this.section4Num = section4Num;
	}

	public int getIdNum() {
		return idNum;
	}

	public void setIdNum(int idNum) {
		this.idNum = idNum;
	}

	public String getLearningIssue() {
		return learningIssue;
	}

	public void setLearningIssue(String learningIssue) {
		this.learningIssue = learningIssue;
	}

	public String getExtentInstructor() {
		return extentInstructor;
	}

	public void setExtentInstructor(String extentInstructor) {
		this.extentInstructor = extentInstructor;
	}

	public String getInstructorRecommendations() {
		return InstructorRecommendations;
	}

	public void setInstructorRecommendations(String instructorRecommendations) {
		InstructorRecommendations = instructorRecommendations;
	}
	
	
}
