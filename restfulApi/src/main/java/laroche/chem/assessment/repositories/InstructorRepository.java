package laroche.chem.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import laroche.chem.assessment.entities.Instructor;

public interface InstructorRepository extends JpaRepository<Instructor, Long> {

}
