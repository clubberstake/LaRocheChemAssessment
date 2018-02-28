package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet4 {

	public CourseInfoForAssessmentWorksheet4(long id, long classId, int sec4Num, int iDNum, String learningIssues, String extentInstructor, String instructorRecommendations) {

		this.id = id;
		this.classId = classId;
		this.sec4Num = sec4Num;
		this.iDNum = iDNum;
		this.learningIssues = learningIssues;
		this.extentInstructor = extentInstructor;
		this.instructorRecommendations = instructorRecommendations;
	}
	private long id;
	private long classId;
	private int sec4Num;
	private int iDNum;
	private String learningIssues;
	private String extentInstructor;
	private String instructorRecommendations;
	
	public long getId()
	{
		return id;
	}
	public long getClassId() 
	{
		return classId;
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

	public String getExtentInstructor() 
	{
		return extentInstructor;
	}

	public String getInstructorRecommendations() 
	{
		return instructorRecommendations;
	}
}
