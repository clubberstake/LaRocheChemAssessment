package laroche.chem.assessment.responseObjects;

public class ClassRosterResponseObject {
	public long studentId;
	public long classId;
	public String className;

	public ClassRosterResponseObject(long studentId, long classId, String className) {
		this.studentId = studentId;
		this.classId = classId;
		this.className = className;
	}
	
	public long getStudentId() {
		return studentId;
	}

	public long getClassId() {
		return classId;
	}

	public String getClassName() {
		return className;
	}
}
