package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet {

	public CourseInfoForAssessmentWorksheet(long courseId, String courseNumber, String courseTitle) {
		this.courseId = courseId;
		this.courseNumber = courseNumber;
		this.courseTitle = courseTitle;
	}

	private long courseId;
	private String courseNumber;
	private String courseTitle;
	
	public long getCourseId()
	{
		return courseId;
	}

	public String getCourseName() {
		return courseTitle;
	}

	public String getCourseNumber() {
		return courseNumber;
	}
}
