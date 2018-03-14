package laroche.chem.assessment.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import laroche.chem.assessment.entities.ClassSemesterReviews;

public interface ClassSemesterReviewsRepository extends JpaRepository<ClassSemesterReviews, Long> {
	
	List<ClassSemesterReviews> findSemesterReviewById(long semesterReviewId);
	List<ClassSemesterReviews> findClassById(long classId);
}
