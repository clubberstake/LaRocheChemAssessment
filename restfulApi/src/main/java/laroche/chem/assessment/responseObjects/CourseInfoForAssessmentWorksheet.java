package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet {

	public CourseInfoForAssessmentWorksheet(long courseId, String courseNumAndSection, String courseTitle, String semester,
			String instructor) {
		this.courseId = courseId;
		this.courseNumAndSection = courseNumAndSection;
		this.courseTitle = courseTitle;
		this.semester = semester;
		this.instructor = instructor;
	}

	private long courseId;
	private String courseNumAndSection;
	private String courseTitle;
	private String semester;
	private String instructor;
	
	public long getCourseId()
	{
		return courseId;
	}

	public String getCourseName() {
		return courseTitle;
	}

	public String getSemester() {
		return semester;
	}

	public String getInstructor() {
		return instructor;
	}
	
	public String getCourseNumAndSection() {
		return courseNumAndSection;
	}
}
