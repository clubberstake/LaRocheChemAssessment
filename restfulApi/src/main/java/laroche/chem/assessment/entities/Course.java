package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Course {

	public Course() {
	}

	public Course(String courseNumAndSection, String courseName, String semester, String year, long instructorId) {
		this.courseNumAndSection = courseNumAndSection;
		this.courseName = courseName;
		this.semester = semester;
		this.year = year;
		this.instructorId = instructorId;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String courseNumAndSection;
	private String courseName;
	private String semester;
	private String year;
	private long instructorId;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCourseName() {
		return courseName;
	}

	public void setCourseName(String courseName) {
		this.courseName = courseName;
	}

	public String getSemester() {
		return semester;
	}

	public void setSemester(String semester) {
		this.semester = semester;
	}

	public String getYear() {
		return year;
	}

	public void setYear(String year) {
		this.year = year;
	}

	public long getInstructorId() {
		return instructorId;
	}

	public void setInstructorId(long instructorId) {
		this.instructorId = instructorId;
	}

	public String getCourseNumAndSection() {
		return courseNumAndSection;
	}

	public void setCourseNumAndSection(String courseNumAndSection) {
		this.courseNumAndSection = courseNumAndSection;
	}
}
