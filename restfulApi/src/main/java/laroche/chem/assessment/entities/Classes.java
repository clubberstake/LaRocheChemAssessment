package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Classes {
	
	public Classes() {}
	
	public Classes(String courseId, byte[] syllabus, String semester) {
		this.courseId = courseId;
		this.syllabus = syllabus;
		this.semester = semester;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String courseId;
	// Array represents tinyblob
	private byte[] syllabus;
	private String semester;
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getCourseId() {
		return courseId;
	}
	
	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}
	
	public byte[] getSyllabus() {
		return syllabus;
	}
	
	public void setSyllabus(byte[] syllabus) {
		this.syllabus = syllabus;
	}
	
	public String getSemester() {
		return semester;
	}
	
	public void setSemester(String semester) {
		this.semester = semester;
	}
	
	
}
