package laroche.chem.assessment.responseObjects;

public class CourseInfoForAssessmentWorksheet2 {

	public CourseInfoForAssessmentWorksheet2(long cafsi1d, byte[] chemConcept, byte[] objectivesContent, byte[] generalComments, int percentA, int percentB, int percentC, int percentD, int percentF) 
	{

		
		this.cafsi1d = cafsi1d;
		this.chemConcept = chemConcept;
		this.objectivesContent = objectivesContent;
		this.generalComments = generalComments;
		this.percentA = percentA;
		this.percentB = percentB;
		this.percentC = percentC;
		this.percentD = percentD;
		this.percentF = percentF;
	}

	private long cafsi1d;
	private byte[] chemConcept;
	private byte[] objectivesContent;
	private byte[] generalComments;
	private int percentA;
	private int percentB;
	private int percentC;
	private int percentD;
	private int percentF;
	
	
	public long getCAFS1ID() 
	{
		return cafsi1d;
	}

	public byte[] getChemConcept() 
	{
		return chemConcept;
	}

	public byte[] getObjectivesContent() 
	{
		return objectivesContent;
	}

	public byte[] getGeneralComments() 
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
