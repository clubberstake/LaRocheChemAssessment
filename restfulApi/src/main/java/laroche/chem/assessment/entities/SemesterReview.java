package laroche.chem.assessment.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class SemesterReview {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "student_id")
	private Student student;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "class_id")
	private Classes classes;
	
	private Boolean[] midSemesterLearningIssues;
	private Boolean[] endSemesterLearningIssues;
	private String midSemesterExtentInstructor;
	private String endSemesterExtentInstructor;
	private String midSemesterInstructorRecommendations;
	private String endSemesterInstructorRecommendations;
	
	public SemesterReview() {}

	public SemesterReview(Student student, Classes classes, Boolean[] midSemesterLearningIssues, Boolean[] endSemesterLearningIssues, String midSemesterExtentInstructor,
			String endSemesterExtentInstructor, String midSemesterInstructorRecommendations, String endSemesterInstructorRecommendations) {
		this.setClassesId(classes);
		this.setStudentID(student);
		this.midSemesterLearningIssues = midSemesterLearningIssues;
		this.endSemesterLearningIssues = endSemesterLearningIssues;
		this.midSemesterExtentInstructor = midSemesterExtentInstructor;
		this.endSemesterExtentInstructor = endSemesterExtentInstructor;
		this.midSemesterInstructorRecommendations = midSemesterInstructorRecommendations;
		this.endSemesterInstructorRecommendations = endSemesterInstructorRecommendations;
	}
	
	public long getID() {
		return id;
	}

	public Boolean[] getMidSemesterLearningIssues() {
		return midSemesterLearningIssues;
	}

	public void setMidSemesterLearningIssues(Boolean[] midSemesterLearningIssues) {
		this.midSemesterLearningIssues = midSemesterLearningIssues;
	}

	public Boolean[] getEndSemesterLearningIssues() {
		return endSemesterLearningIssues;
	}

	public void setEndSemesterLearningIssues(Boolean[] endSemesterLearningIssues) {
		this.endSemesterLearningIssues = endSemesterLearningIssues;
	}

	public String getMidSemesterExtentInstructor() {
		return midSemesterExtentInstructor;
	}

	public void setMidSemesterExtentInstructor(String midSemesterExtentInstructor) {
		this.midSemesterExtentInstructor = midSemesterExtentInstructor;
	}

	public String getEndSemesterExtentInstructor() {
		return endSemesterExtentInstructor;
	}

	public void setEndSemesterExtentInstructor(String endSemesterExtentInstructor) {
		this.endSemesterExtentInstructor = endSemesterExtentInstructor;
	}

	public String getMidSemesterInstructorRecommendations() {
		return midSemesterInstructorRecommendations;
	}

	public void setMidSemesterInstructorRecommendations(String midSemesterInstructorRecommendations) {
		this.midSemesterInstructorRecommendations = midSemesterInstructorRecommendations;
	}

	public String getEndSemesterInstructorRecommendations() {
		return endSemesterInstructorRecommendations;
	}

	public void setEndSemesterInstructorRecommendations(String endSemesterInstructorRecommendations) {
		this.endSemesterInstructorRecommendations = endSemesterInstructorRecommendations;
	}

	public Student getStudentID() {
		return student;
	}

	public void setStudentID(Student student) {
		this.student = student;
	}

	public Classes getClassesId() {
		return classes;
	}

	public void setClassesId(Classes classes) {
		this.classes = classes;
	}

}
