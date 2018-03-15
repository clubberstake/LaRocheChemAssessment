package laroche.chem.assessment.responseObjects;

public class SemesterReviewRequest {
	
	private Boolean[] midSemesterLearningIssues;
	private Boolean[] endSemesterLearningIssues;
	private String midSemesterExtentInstructor;
	private String endSemesterExtentInstructor;
	private String midSemesterInstructorRecommendations;
	private String endSemesterInstructorRecommendations;
	private long studentId;
	private long classId;
	
	public long getClassId() {
		return classId;
	}
	
	public void setClassId(long classId) {
		this.classId = classId;
	}
	
	public long getStudentId() {
		return studentId;
	}

	public void setStudentId(long studentId) {
		this.studentId = studentId;
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

}
