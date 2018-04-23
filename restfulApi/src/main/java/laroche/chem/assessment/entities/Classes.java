package laroche.chem.assessment.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

@Entity
public class Classes {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	private long courseId;
	// Array represents tinyblob
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "syllabus")
	private FileStorage syllabus;
		
	private String semester;
	private String section;
	private int instructorId;
	
	public Classes() {}
	
	public Classes(long courseId, FileStorage syllabus, String semester, String section, int instructorId) {
		this.courseId = courseId;
		this.syllabus = syllabus;
		this.semester = semester;
		this.section = section;
		this.instructorId = instructorId;
	}
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public long getCourseId() {
		return courseId;
	}
	
	public void setCourseId(int courseId) {
		this.courseId = courseId;
	}
	
	public FileStorage getSyllabus() {
		return syllabus;
	}
	
	public void setSyllabus(FileStorage syllabus) {
		this.syllabus = syllabus;
	}
	
	public String getSemester() {
		return semester;
	}
	
	public void setSemester(String semester) {
		this.semester = semester;
	}
	
	public String getSection()
	{
		return section;
	}
	
	public void setSection(String section)
	{
		this.section = section;
	}
	
	public int getInstructorId()
	{
		return instructorId;
	}
	
	public void setInstructorId(int instructorId)
	{
		this.instructorId = instructorId;
	}
}
