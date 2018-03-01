package laroche.chem.assessment.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class MidSemesterReview {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "student_id")
	private Student student;
	
	private Boolean[] learningIssues;
	private String extentInstructor;
	private String instructorRecommendations;
	
	public MidSemesterReview() {}

	public MidSemesterReview(Student student, Boolean[] learningIssues, String extentInstructor,
			String instructorRecommendations) {
		this.setStudentID(student);
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

	public Student getStudentID() {
		return student;
	}

	public void setStudentID(Student student) {
		this.student = student;
	}

	
}
