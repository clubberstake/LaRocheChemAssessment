package laroche.chem.assessment.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {

	List<Course> findByCourseName(String courseNumAndSection);

}

