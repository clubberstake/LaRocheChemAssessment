package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class CourseAssessmentFormSection1 {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private long classId;
	private String newSLOs;
	private String upgrades;
	private String enhancements;
	private String modifications;
	private String other;
	
	public CourseAssessmentFormSection1() {}
	
	public CourseAssessmentFormSection1(long classId, String newSLOs, String upgrades, String enhancements, String modifications,
			String other) {
		this.classId = classId;
		this.newSLOs = newSLOs;
		this.upgrades = upgrades;
		this.enhancements = enhancements;
		this.modifications = modifications;
		this.other = other;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public long getClassId()
	{
		return classId;
	}
	
	public void setClassId(long classId)
	{
		this.classId = classId;
	}
	
	public String getNewSLOs() {
		return newSLOs;
	}
	
	public void setNewSLOs(String newSLOs) {
		this.newSLOs = newSLOs;
	}
	
	public String getUpgrades() {
		return upgrades;
	}
	
	public void setUpgrades(String upgrades) {
		this.upgrades = upgrades;
	}
	
	public String getEnhancements() {
		return enhancements;
	}
	
	public void setEnhancements(String enhancements) {
		this.enhancements = enhancements;
	}
	
	public String getModifications() {
		return modifications;
	}
	
	public void setModifications(String modifications) {
		this.modifications = modifications;
	}
	
	public String getOther() {
		return other;
	}
	
	public void setOther(String other) {
		this.other = other;
	}
	
}
