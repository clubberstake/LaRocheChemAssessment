package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CourseSLOs {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private long classId;
	private String slo1;
	private String slo2;
	private String slo3;
	private String slo4;
	private String slo5;
	
	public CourseSLOs() {}

	public CourseSLOs(long classId, String slo1, String slo2, String slo3, String slo4, String slo5) {
		this.classId = classId;
		this.slo1 = slo1;
		this.slo2 = slo2;
		this.slo3 = slo3;
		this.slo4 = slo4;
		this.slo5 = slo5;
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

	public String getSlo1() {
		return slo1;
	}

	public void setSlo1(String slo1) {
		this.slo1 = slo1;
	}

	public String getSlo2() {
		return slo2;
	}

	public void setSlo2(String slo2) {
		this.slo2 = slo2;
	}

	public String getSlo3() {
		return slo3;
	}

	public void setSlo3(String slo3) {
		this.slo3 = slo3;
	}

	public String getSlo4() {
		return slo4;
	}

	public void setSlo4(String slo4) {
		this.slo4 = slo4;
	}

	public String getSlo5() {
		return slo5;
	}

	public void setSlo5(String slo5) {
		this.slo5 = slo5;
	}
	
}
