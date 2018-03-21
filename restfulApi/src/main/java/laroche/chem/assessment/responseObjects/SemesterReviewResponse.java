package laroche.chem.assessment.responseObjects;

import laroche.chem.assessment.entities.Classes;
import laroche.chem.assessment.entities.Student;

public class SemesterReviewResponse {
	private Student student;
	private Classes classes;
	
	private Boolean[] midSemesterLearningIssues;
	private Boolean[] endSemesterLearningIssues;
	private String midSemesterExtentInstructor;
	private String endSemesterExtentInstructor;
	private String midSemesterInstructorRecommendations;
	private String endSemesterInstructorRecommendations;

	public SemesterReviewResponse(Student student, Classes classes, Boolean[] midSemesterLearningIssues, Boolean[] endSemesterLearningIssues, String midSemesterExtentInstructor,
			String endSemesterExtentInstructor, String midSemesterInstructorRecommendations, String endSemesterInstructorRecommendations) {
		this.setClasses(classes);
		this.setStudent(student);
		this.midSemesterLearningIssues = midSemesterLearningIssues;
		this.endSemesterLearningIssues = endSemesterLearningIssues;
		this.midSemesterExtentInstructor = midSemesterExtentInstructor;
		this.endSemesterExtentInstructor = endSemesterExtentInstructor;
		this.midSemesterInstructorRecommendations = midSemesterInstructorRecommendations;
		this.endSemesterInstructorRecommendations = endSemesterInstructorRecommendations;
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

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

	public Classes getClasses() {
		return classes;
	}

	public void setClasses(Classes classes) {
		this.classes = classes;
	}

	
}
