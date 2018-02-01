package laroche.chem.assessment.responseObjects;

import java.io.File;

public class ClassInfo {

	public ClassInfo(String courseID, byte[] bs, String semester, String courseTitle, String instructorName) 
	{
		this.courseID = courseID;
		this.syllabus = bs;
		this.semester = semester;
		this.instructorName = instructorName;
		this.courseTitle = courseTitle;
	}
	private String courseID;
	private byte[] syllabus;
	private String semester;
	private String instructorName;
	private String courseTitle;

	public String getCourseID()
	{
		return courseID;
	}
	
	public byte[] getSyllabus()
	{
		return syllabus;
	}
	
	public String getSemester()
	{
		return semester;
	}
	
	public String getInstructorName()
	{
		return instructorName;
	}
	
	public String getCourseTitle()
	{
		return courseTitle;
	}
}
