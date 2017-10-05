package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet {

	public CourseInfoForAssessmentWorksheet(String courseNumAndSection, String courseTitle, String semester,
			String instructor) {
		this.courseNumAndSection = courseNumAndSection;
		this.courseTitle = courseTitle;
		this.semester = semester;
		this.instructor = instructor;
	}

	private String courseNumAndSection;
	private String courseTitle;
	private String semester;
	private String instructor;

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
