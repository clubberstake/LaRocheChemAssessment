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
	private byte[] newSLOs;
	private byte[] upgrades;
	private byte[] enhancements;
	private byte[] modifications;
	private byte[] other;
	
	public CourseAssessmentFormSection1() {}
	
	public CourseAssessmentFormSection1(byte[] newSLOs, byte[] upgrades, byte[] enhancements, byte[] modifications,
			byte[] other) {
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
	
	public byte[] getNewSLOs() {
		return newSLOs;
	}
	
	public void setNewSLOs(byte[] newSLOs) {
		this.newSLOs = newSLOs;
	}
	
	public byte[] getUpgrades() {
		return upgrades;
	}
	
	public void setUpgrades(byte[] upgrades) {
		this.upgrades = upgrades;
	}
	
	public byte[] getEnhancements() {
		return enhancements;
	}
	
	public void setEnhancements(byte[] enhancements) {
		this.enhancements = enhancements;
	}
	
	public byte[] getModifications() {
		return modifications;
	}
	
	public void setModifications(byte[] modifications) {
		this.modifications = modifications;
	}
	
	public byte[] getOther() {
		return other;
	}
	
	public void setOther(byte[] other) {
		this.other = other;
	}
	
}
