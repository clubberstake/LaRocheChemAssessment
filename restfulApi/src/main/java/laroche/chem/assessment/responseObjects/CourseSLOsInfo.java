package laroche.chem.assessment.responseObjects;

public class CourseSLOsInfo {

	public CourseSLOsInfo(long classID, String courseTitle, String semester,
			String instructor, String slo1, String slo2, String slo3, String slo4, String slo5) {
		this.classID = classID;
		this.courseTitle = courseTitle;
		this.semester = semester;
		this.instructor = instructor;
		this.slo1 = slo1;
		this.slo2 = slo2;
		this.slo3 = slo3;
		this.slo4 = slo4;
		this.slo5 = slo5;
	}

	private long classID;
	private String courseTitle;
	private String semester;
	private String instructor;
	private String slo1;
	private String slo2;
	private String slo3;
	private String slo4;
	private String slo5;


	public String getCourseName() {
		return courseTitle;
	}

	public String getSemester() {
		return semester;
	}

	public String getInstructor() {
		return instructor;
	}
	
	public long getClassID()
	{
		return classID;
	}
	
	public String getSLO1()
	{
		return slo1;
	}
	
	public String getSLO2()
	{
		return slo2;
	}
	
	public String getSLO3()
	{
		return slo3;
	}
	
	public String getSLO4()
	{
		return slo4;
	}
	
	public String getSLO5()
	{
		return slo5;
	}
}
