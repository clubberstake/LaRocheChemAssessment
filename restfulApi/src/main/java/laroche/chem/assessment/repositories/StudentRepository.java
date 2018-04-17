package laroche.chem.assessment.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
	
	List<Student> findByStudentName(String studentName);
}
