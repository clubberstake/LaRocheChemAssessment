package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Course {

	public Course() {
	}

	public Course(String courseNumber, String courseName) {
		this.courseNumber = courseNumber;
		this.courseName = courseName;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private String courseNumber;
	private String courseName;

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

	public String getCourseNumber() {
		return courseNumber;
	}

	public void setCourseNumber(String courseNumber) {
		this.courseNumber = courseNumber;
	}
}
