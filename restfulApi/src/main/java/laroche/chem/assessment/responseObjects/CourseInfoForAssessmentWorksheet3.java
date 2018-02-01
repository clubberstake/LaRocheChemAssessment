package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet3 {

	public CourseInfoForAssessmentWorksheet3(long cafsi1d, byte[] coursePreReq, byte[] textbooks, byte[] studentAsse, byte[] pedagogy, byte[] faculty, byte[] mindCapitalEq) {

		
		this.cafsi1d = cafsi1d;
		this.coursePreReq = coursePreReq;
		this.textbooks = textbooks;
		this.studentAsse = studentAsse;
		this.pedagogy = pedagogy;
		this.faculty = faculty;
		this.mindCapitalEq = mindCapitalEq;
	}

	private long cafsi1d;
	private byte[] coursePreReq;
	private byte[] textbooks;
	private byte[] studentAsse;
	private byte[] pedagogy;
	private byte[] faculty;
	private byte[] mindCapitalEq;
	
	
	public long getCAFS1ID() 
	{
		return cafsi1d;
	}

	public byte[] getCoursePreReq() 
	{
		return coursePreReq;
	}

	public byte[] getTextbooks() 
	{
		return textbooks;
	}

	public byte[] getStudentAsse() 
	{
		return studentAsse;
	}

	public byte[] getPedagogy() 
	{
		return pedagogy;
	}

	public byte[] getFaculty() 
	{
		return faculty;
	}
	
	public byte[] getMindCapitalEq() 
	{
		return mindCapitalEq;
	}
}
