package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MidSemesterReviewEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private int studentID;
	private Boolean[] learningIssues;
	private String extentInstructor;
	private String instructorRecommendations;
	
	public MidSemesterReviewEntity() {}

	public MidSemesterReviewEntity(int studentID, Boolean[] learningIssues, String extentInstructor,
			String instructorRecommendations) {
		this.setStudentID(studentID);
		this.learningIssues = learningIssues;
		this.extentInstructor = extentInstructor;
		this.instructorRecommendations = instructorRecommendations;
	}
	
	public long getID() {
		return id;
	}

	public Boolean[] getLearningIssues() {
		return learningIssues;
	}

	public void setLearningIssues(Boolean[] learningIssues) {
		this.learningIssues = learningIssues;
	}

	public String getExtentInstructor() {
		return extentInstructor;
	}

	public void setExtentInstructor(String extentInstructor) {
		this.extentInstructor = extentInstructor;
	}

	public String getInstructorRecommendations() {
		return instructorRecommendations;
	}

	public void setInstructorRecommendations(String instructorRecommendations) {
		this.instructorRecommendations = instructorRecommendations;
	}

	public int getStudentID() {
		return studentID;
	}

	public void setStudentID(int studentID) {
		this.studentID = studentID;
	}

	
}
