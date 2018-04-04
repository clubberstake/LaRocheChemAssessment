package laroche.chem.assessment.responseObjects;

import laroche.chem.assessment.entities.FileStorage;

public class ClassInfo {

	public ClassInfo(long classId, long courseId, String courseID, FileStorage syllabus, String section, String semester, String courseTitle, long instructorId, String instructorName) 
	{
		this.classId = classId;
		this.courseId = courseId;
		this.courseID = courseID;
		this.syllabus = syllabus;
		this.section = section;
		this.semester = semester;
		this.instructorId = instructorId;
		this.instructorName = instructorName;
		this.courseTitle = courseTitle;
	}
	private long classId;
	private long courseId;
	private String courseID;
	private FileStorage syllabus;
	private String section;
	private String semester;
	private long instructorId;
	private String instructorName;
	private String courseTitle;

	public long getClassId()
	{
		return classId;
	}
	
	public long getCourseId()
	{
		return courseId;
	}
	
	public String getCourseID()
	{
		return courseID;
	}
	
	public FileStorage getSyllabus()
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
