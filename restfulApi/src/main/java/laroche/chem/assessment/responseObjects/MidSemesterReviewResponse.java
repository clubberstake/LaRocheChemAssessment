package laroche.chem.assessment.responseObjects;

import laroche.chem.assessment.entities.Student;

public class MidSemesterReviewResponse {
	private Student student;
	private Boolean[] learningIssues;
	private String extentInstructor;
	private String instructorRecommendations;

	public MidSemesterReviewResponse(Student student, Boolean[] learningIssues, String extentInstructor,
			String instructorRecommendations) {
		this.setStudent(student);
		this.learningIssues = learningIssues;
		this.extentInstructor = extentInstructor;
		this.instructorRecommendations = instructorRecommendations;
	}

	public Boolean[] getLearningIssues() {
		return learningIssues;
	}

	public String getExtentInstructor() {
		return extentInstructor;
	}

	public String getInstructorRecommendations() {
		return instructorRecommendations;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}

}
