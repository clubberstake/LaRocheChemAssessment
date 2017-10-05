package laroche.chem.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

}
