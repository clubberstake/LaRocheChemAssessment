package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CourseAssessmentFormSection5 {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private int sec5Num;
	private int idNum;
	private String grade;
	private String learningIssue;
	private byte[] extentInstructorInt;
	private byte[] instructorEvalRecommendations;
	
	public CourseAssessmentFormSection5() {}

	public CourseAssessmentFormSection5(int sec5Num, int idNum, String grade, String learningIssue,
			byte[] extentInstructorInt, byte[] instructorEvalRecommendations) {
		this.sec5Num = sec5Num;
		this.idNum = idNum;
		this.grade = grade;
		this.learningIssue = learningIssue;
		this.extentInstructorInt = extentInstructorInt;
		this.instructorEvalRecommendations = instructorEvalRecommendations;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getSec5Num() {
		return sec5Num;
	}

	public void setSec5Num(int sec5Num) {
		this.sec5Num = sec5Num;
	}

	public int getIdNum() {
		return idNum;
	}

	public void setIdNum(int idNum) {
		this.idNum = idNum;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getLearningIssue() {
		return learningIssue;
	}

	public void setLearningIssue(String learningIssue) {
		this.learningIssue = learningIssue;
	}

	public byte[] getExtentInstructorInt() {
		return extentInstructorInt;
	}

	public void setExtentInstructorInt(byte[] extentInstructorInt) {
		this.extentInstructorInt = extentInstructorInt;
	}

	public byte[] getInstructorEvalRecommendations() {
		return instructorEvalRecommendations;
	}

	public void setInstructorEvalRecommendations(byte[] instructorEvalRecommendations) {
		this.instructorEvalRecommendations = instructorEvalRecommendations;
	}
	
}
