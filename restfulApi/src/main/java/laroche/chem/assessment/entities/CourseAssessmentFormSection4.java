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
	private int section4Num;
	private int idNum;
	private String learningIssue;
	private byte[] extentInstructor;
	private byte[] InstructorRecommendations;
	
	public CourseAssessmentFormSection4() {}

	public CourseAssessmentFormSection4(int section4Num, int idNum, String learningIssue, byte[] extentInstructor,
			byte[] instructorRecommendations) {
		this.section4Num = section4Num;
		this.idNum = idNum;
		this.learningIssue = learningIssue;
		this.extentInstructor = extentInstructor;
		InstructorRecommendations = instructorRecommendations;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public byte[] getExtentInstructor() {
		return extentInstructor;
	}

	public void setExtentInstructor(byte[] extentInstructor) {
		this.extentInstructor = extentInstructor;
	}

	public byte[] getInstructorRecommendations() {
		return InstructorRecommendations;
	}

	public void setInstructorRecommendations(byte[] instructorRecommendations) {
		InstructorRecommendations = instructorRecommendations;
	}
	
	
}
