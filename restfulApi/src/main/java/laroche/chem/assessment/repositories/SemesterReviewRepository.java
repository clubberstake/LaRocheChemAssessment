package laroche.chem.assessment.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.SemesterReview;

public interface SemesterReviewRepository extends JpaRepository<SemesterReview, Long> {

	List<SemesterReview> findByStudentId(long studentId);
	List<SemesterReview> findByClassesId(long classesId);
	List<SemesterReview> findByClassesIdAndStudentId(long classesId, long studentId);
}
