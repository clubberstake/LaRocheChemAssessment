package laroche.chem.assessment.responseObjects;

public class CourseAssessmentFormSection1Info {

	public CourseAssessmentFormSection1Info(long id, long classId, String NewSLOs, String Upgrades, String Enhancements, String Modifications, String Other)
	{
		this.id = id;
		this.classId = classId;
		this.NewSLOs = NewSLOs;
		this.Upgrades = Upgrades;
		this.Enhancements = Enhancements;
		this.Modifications = Modifications;
		this.Other = Other;
	}
	
	private long id;
	private long classId;
	private String NewSLOs;
	private String Upgrades;
	private String Enhancements;
	private String Modifications;
	private String Other;
	
	public long getId()
	{
		return id;
	}
	
	public long getClassId()
	{
		return classId;
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
