package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CourseAssessmentFormSection2 {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private byte[] chemConcept;
	private byte[] objectivesContent;
	private byte[] generalComments;
	private int percentA;
	private int percentB;
	private int percentC;
	private int percentD;
	private int percentF;
	
	public CourseAssessmentFormSection2() {}
	
	public CourseAssessmentFormSection2(long id, byte[] chemConcept, byte[] objectivesContent, byte[] generalComments,
			int percentA, int percentB, int percentC, int percentD, int percentF) {
		this.id = id;
		this.chemConcept = chemConcept;
		this.objectivesContent = objectivesContent;
		this.generalComments = generalComments;
		this.percentA = percentA;
		this.percentB = percentB;
		this.percentC = percentC;
		this.percentD = percentD;
		this.percentF = percentF;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public byte[] getChemConcept() {
		return chemConcept;
	}

	public void setChemConcept(byte[] chemConcept) {
		this.chemConcept = chemConcept;
	}

	public byte[] getObjectivesContent() {
		return objectivesContent;
	}

	public void setObjectivesContent(byte[] objectivesContent) {
		this.objectivesContent = objectivesContent;
	}

	public byte[] getGeneralComments() {
		return generalComments;
	}

	public void setGeneralComments(byte[] generalComments) {
		this.generalComments = generalComments;
	}

	public int getPercentA() {
		return percentA;
	}

	public void setPercentA(int percentA) {
		this.percentA = percentA;
	}

	public int getPercentB() {
		return percentB;
	}

	public void setPercentB(int percentB) {
		this.percentB = percentB;
	}

	public int getPercentC() {
		return percentC;
	}

	public void setPercentC(int percentC) {
		this.percentC = percentC;
	}

	public int getPercentD() {
		return percentD;
	}

	public void setPercentD(int percentD) {
		this.percentD = percentD;
	}

	public int getPercentF() {
		return percentF;
	}

	public void setPercentF(int percentF) {
		this.percentF = percentF;
	}
	
}
