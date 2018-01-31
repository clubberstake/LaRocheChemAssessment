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
	private byte[] coursePreReq;
	private byte[] textbooks;
	private byte[] studentAsse;
	private byte[] pedagogy;
	private byte[] faculty;
	private byte[] minorCapitalEq;
	private byte[] other;
	
	public CourseAssessmentFormSection3() {}
	
	public CourseAssessmentFormSection3(byte[] coursePreReq, byte[] textbooks, byte[] studentAsse, byte[] pedagogy,
			byte[] faculty, byte[] minorCapitalEq, byte[] other) {
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

	public byte[] getCoursePreReq() {
		return coursePreReq;
	}

	public void setCoursePreReq(byte[] coursePreReq) {
		this.coursePreReq = coursePreReq;
	}

	public byte[] getTextbooks() {
		return textbooks;
	}

	public void setTextbooks(byte[] textbooks) {
		this.textbooks = textbooks;
	}

	public byte[] getStudentAsse() {
		return studentAsse;
	}

	public void setStudentAsse(byte[] studentAsse) {
		this.studentAsse = studentAsse;
	}

	public byte[] getPedagogy() {
		return pedagogy;
	}

	public void setPedagogy(byte[] pedagogy) {
		this.pedagogy = pedagogy;
	}

	public byte[] getFaculty() {
		return faculty;
	}

	public void setFaculty(byte[] faculty) {
		this.faculty = faculty;
	}

	public byte[] getMinorCapitalEq() {
		return minorCapitalEq;
	}

	public void setMinorCapitalEq(byte[] minorCapitalEq) {
		this.minorCapitalEq = minorCapitalEq;
	}

	public byte[] getOther() {
		return other;
	}

	public void setOther(byte[] other) {
		this.other = other;
	}
	
	
	
}
