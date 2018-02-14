package laroche.chem.assessment.responseObjects;

import java.io.File;

public class ClassInfo {

	public ClassInfo(long courseId, String courseID, byte[] bs, String section, String semester, String courseTitle, long instructorId, String instructorName) 
	{
		this.courseId = courseId;
		this.courseID = courseID;
		this.syllabus = bs;
		this.section = section;
		this.semester = semester;
		this.instructorId = instructorId;
		this.instructorName = instructorName;
		this.courseTitle = courseTitle;
	}
	private long courseId;
	private String courseID;
	private byte[] syllabus;
	private String section;
	private String semester;
	private long instructorId;
	private String instructorName;
	private String courseTitle;

	public long getCourseId()
	{
		return courseId;
	}
	
	public String getCourseID()
	{
		return courseID;
	}
	
	public byte[] getSyllabus()
	{
		return syllabus;
	}
	
	public String getsection()
	{
		return section;
	}
	
	public String getSemester()
	{
		return semester;
	}
	
	public long getInstructorId()
	{
		return instructorId;
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
