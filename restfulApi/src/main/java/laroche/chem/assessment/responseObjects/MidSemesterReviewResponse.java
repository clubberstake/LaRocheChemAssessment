package laroche.chem.assessment.responseObjects;

public class MidSemesterReviewResponse {
	private int studentID;
	private Boolean[] learningIssues;
	private String extentInstructor;
	private String instructorRecommendations;
	
	public MidSemesterReviewResponse(int studentID,Boolean[] learningIssues, String extentInstructor, String instructorRecommendations) {
		this.setStudentID(studentID);
		this.learningIssues = learningIssues;
		this.extentInstructor = extentInstructor;
		this.instructorRecommendations = instructorRecommendations;
	}	

	
	public Boolean[] getLearningIssues() 
	{
		return learningIssues;
	}

	public String getExtentInstructor() 
	{
		return extentInstructor;
	}

	public String getInstructorRecommendations() 
	{
		return instructorRecommendations;
	}


	public int getStudentID() {
		return studentID;
	}


	public void setStudentID(int studentID) {
		this.studentID = studentID;
	}


}
