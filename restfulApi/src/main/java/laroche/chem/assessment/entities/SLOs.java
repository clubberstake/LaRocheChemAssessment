package laroche.chem.assessment.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class SLOs {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String sloName;
	
	public SLOs() {}

	public SLOs(String sloName) {
		this.sloName = sloName;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSloName() {
		return sloName;
	}

	public void setSloName(String sloName) {
		this.sloName = sloName;
	}
	
}
