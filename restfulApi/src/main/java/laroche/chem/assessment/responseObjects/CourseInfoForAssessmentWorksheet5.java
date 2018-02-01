package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet5 {

	public CourseInfoForAssessmentWorksheet5(long cafsi1d, int sec5Num, int iDNum, String grade, String learningIssues, byte[] extentInstructorInt) {

		
		this.cafsi1d = cafsi1d;
		this.sec5Num = sec5Num;
		this.iDNum = iDNum;
		this.grade = grade;
		this.learningIssues = learningIssues;
		this.extentInstructorInt = extentInstructorInt;
	}

	private long cafsi1d;
	private int sec5Num;
	private int iDNum;
	private String grade;
	private String learningIssues;
	private byte[] extentInstructorInt;
	
	
	public long getCAFS1ID() 
	{
		return cafsi1d;
	}

	public int getSec5Num() 
	{
		return sec5Num;
	}

	public int getIDNum() 
	{
		return iDNum;
	}

	public String getGrade() 
	{
		return grade;
	}

	public String getLearningIssues() 
	{
		return learningIssues;
	}

	public byte[] getExtentInstructorInt() 
	{
		return extentInstructorInt;
	}
}
