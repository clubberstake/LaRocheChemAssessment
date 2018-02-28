package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet2 {

	public CourseInfoForAssessmentWorksheet2(long id, long classId, String chemConcept, String objectivesContent, String generalComments, int percentA, int percentB, int percentC, int percentD, int percentF) 
	{
		this.id = id;
		this.classId = classId;
		this.chemConcept = chemConcept;
		this.objectivesContent = objectivesContent;
		this.generalComments = generalComments;
		this.percentA = percentA;
		this.percentB = percentB;
		this.percentC = percentC;
		this.percentD = percentD;
		this.percentF = percentF;
	}
	private long id;
	private long classId;
	private String chemConcept;
	private String objectivesContent;
	private String generalComments;
	private int percentA;
	private int percentB;
	private int percentC;
	private int percentD;
	private int percentF;
	
	public long getId() {
		return id;
	}
	public long getClassId() 
	{
		return classId;
	}

	public String getChemConcept() 
	{
		return chemConcept;
	}

	public String getObjectivesContent() 
	{
		return objectivesContent;
	}

	public String getGeneralComments() 
	{
		return generalComments;
	}

	public int getpercentA() 
	{
		return percentA;
	}
	
	public int getpercentB() 
	{
		return percentB;
	}
	
	public int getpercentC() 
	{
		return percentC;
	}
	
	public int getpercentD() 
	{
		return percentD;
	}
	
	public int getpercentF() 
	{
		return percentF;
	}

	
}
