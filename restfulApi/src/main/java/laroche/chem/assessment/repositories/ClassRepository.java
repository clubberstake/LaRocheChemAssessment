package laroche.chem.assessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.Classes;
import java.util.List;
public interface ClassRepository extends JpaRepository<Classes, Long>{
	List<Classes> findByCourseId(long courseId);
}
