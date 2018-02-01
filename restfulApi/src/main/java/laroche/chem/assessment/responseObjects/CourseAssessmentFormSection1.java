package laroche.chem.assessment.responseObjects;

public class CourseAssessmentFormSection1 {

	public CourseAssessmentFormSection1(String CAFS1ID, String NewSLOs, String Upgrades, String Enhancements, String Modifications, String Other)
	{
		this.CAFS1ID = CAFS1ID;
		this.NewSLOs = NewSLOs;
		this.Upgrades = Upgrades;
		this.Enhancements = Enhancements;
		this.Modifications = Modifications;
		this.Other = Other;
	}
	
	private String CAFS1ID;
	private String NewSLOs;
	private String Upgrades;
	private String Enhancements;
	private String Modifications;
	private String Other;
	
	public String getCAFS1ID()
	{
		return CAFS1ID;
	}
	
	public String getNewSLOs()
	{
		return NewSLOs;
	}
	
	public String getUpgrades()
	{
		return Upgrades;
	}

	public String getEnhancements()
	{
		return Enhancements;
	}
	
	public String getModifications()
	{
		return Modifications;
	}
	
	public String getOther()
	{
		return Other;
	}
}
