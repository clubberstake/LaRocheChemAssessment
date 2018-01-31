package laroche.chem.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {

}
