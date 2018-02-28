package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet3 {

	public CourseInfoForAssessmentWorksheet3(long id, long classId, String coursePreReq, String textbooks, String studentAsse, String pedagogy, String faculty, String minorCapitalEq, String other) {

		this.id = id;
		this.classId = classId;
		this.coursePreReq = coursePreReq;
		this.textbooks = textbooks;
		this.studentAsse = studentAsse;
		this.pedagogy = pedagogy;
		this.faculty = faculty;
		this.minorCapitalEq = minorCapitalEq;
		this.other = other;
	}

	private long id;
	private long classId;
	private String coursePreReq;
	private String textbooks;
	private String studentAsse;
	private String pedagogy;
	private String faculty;
	private String minorCapitalEq;
	private String other;
	
	
	public long getId()
	{
		return id;
	}
	public long getClassId() 
	{
		return classId;
	}

	public String getCoursePreReq() 
	{
		return coursePreReq;
	}

	public String getTextbooks() 
	{
		return textbooks;
	}

	public String getStudentAsse() 
	{
		return studentAsse;
	}

	public String getPedagogy() 
	{
		return pedagogy;
	}

	public String getFaculty() 
	{
		return faculty;
	}
	
	public String getMinorCapitalEq() 
	{
		return minorCapitalEq;
	}
	public String getOther()
	{
		return other;
	}
}
