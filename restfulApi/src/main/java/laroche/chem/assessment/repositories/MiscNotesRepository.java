package laroche.chem.assessment.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.MiscNotes;
import laroche.chem.assessment.entities.Student;

public interface MiscNotesRepository extends JpaRepository<MiscNotes, Long> {
	
	List<MiscNotes> findByStudentId(long studentId);
}
