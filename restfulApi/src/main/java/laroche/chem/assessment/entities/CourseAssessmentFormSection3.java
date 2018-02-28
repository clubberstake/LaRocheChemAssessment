package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CourseAssessmentFormSection3 {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private long classId;
	private String coursePreReq;
	private String textbooks;
	private String studentAsse;
	private String pedagogy;
	private String faculty;
	private String minorCapitalEq;
	private String other;
	
	public CourseAssessmentFormSection3() {}
	
	public CourseAssessmentFormSection3(long classId, String coursePreReq, String textbooks, String studentAsse, String pedagogy,
			String faculty, String minorCapitalEq, String other) {
		this.classId = classId;
		this.coursePreReq = coursePreReq;
		this.textbooks = textbooks;
		this.studentAsse = studentAsse;
		this.pedagogy = pedagogy;
		this.faculty = faculty;
		this.minorCapitalEq = minorCapitalEq;
		this.other = other;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public long getClassId() {
		return classId;
	}
	
	public void setClassId(long classId) {
		this.classId = classId;
	}
	public String getCoursePreReq() {
		return coursePreReq;
	}

	public void setCoursePreReq(String coursePreReq) {
		this.coursePreReq = coursePreReq;
	}

	public String getTextbooks() {
		return textbooks;
	}

	public void setTextbooks(String textbooks) {
		this.textbooks = textbooks;
	}

	public String getStudentAsse() {
		return studentAsse;
	}

	public void setStudentAsse(String studentAsse) {
		this.studentAsse = studentAsse;
	}

	public String getPedagogy() {
		return pedagogy;
	}

	public void setPedagogy(String pedagogy) {
		this.pedagogy = pedagogy;
	}

	public String getFaculty() {
		return faculty;
	}

	public void setFaculty(String faculty) {
		this.faculty = faculty;
	}

	public String getMinorCapitalEq() {
		return minorCapitalEq;
	}

	public void setMinorCapitalEq(String minorCapitalEq) {
		this.minorCapitalEq = minorCapitalEq;
	}

	public String getOther() {
		return other;
	}

	public void setOther(String other) {
		this.other = other;
	}
	
	
	
}
