package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet4 {

	public CourseInfoForAssessmentWorksheet4(long cafsi1d, int sec4Num, int iDNum, String learningIssues, byte[] extentInstructor, byte[] instructorRecommendations) {

		
		this.cafsi1d = cafsi1d;
		this.sec4Num = sec4Num;
		this.iDNum = iDNum;
		this.learningIssues = learningIssues;
		this.extentInstructor = extentInstructor;
		this.instructorRecommendations = instructorRecommendations;
	}

	private long cafsi1d;
	private int sec4Num;
	private int iDNum;
	private String learningIssues;
	private byte[] extentInstructor;
	private byte[] instructorRecommendations;
	
	
	public long getCAFS1ID() 
	{
		return cafsi1d;
	}

	public int getSec4Num() 
	{
		return sec4Num;
	}

	public int getIDNum() 
	{
		return iDNum;
	}

	public String getLearningIssues() 
	{
		return learningIssues;
	}

	public byte[] getExtentInstructor() 
	{
		return extentInstructor;
	}

	public byte[] getInstructorRecommendations() 
	{
		return instructorRecommendations;
	}
}
