package laroche.chem.assessment.restApp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.ClassSemesterReviews;
import laroche.chem.assessment.entities.SemesterReview;
import laroche.chem.assessment.repositories.ClassRepository;
import laroche.chem.assessment.repositories.ClassSemesterReviewsRepository;
import laroche.chem.assessment.repositories.SemesterReviewRepository;
import laroche.chem.assessment.repositories.StudentRepository;
import laroche.chem.assessment.responseObjects.ClassSemesterReviewsResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/classSemesterReview")
public class ClassSemesterReviewsController {

	@Autowired
	ClassSemesterReviewsRepository classSemesterReviewRepository;
	@Autowired
	ClassRepository classRepository;
	@Autowired
	SemesterReviewRepository semesterReviewRepository;
	@Autowired
	StudentRepository studentRepository;
	
	@GetMapping("/classSemesterReviews")
	private ArrayList<ClassSemesterReviewsResponse> getClassSemesterReviewInfo() {
		ClassSemesterReviews item = new ClassSemesterReviews();
		item.setClassesId(classRepository.findOne((long) 1));
		item.setSemesterReviewId(semesterReviewRepository.findOne((long) 1));
		
		classSemesterReviewRepository.save(item);
		
		List<ClassSemesterReviews> classSemesterReviews = classSemesterReviewRepository.findAll();
		ArrayList<ClassSemesterReviewsResponse> classSemesterReviewsData = new ArrayList<>();
		for(ClassSemesterReviews classSemesterReview : classSemesterReviews) {
			classSemesterReviewsData.add(new ClassSemesterReviewsResponse(classSemesterReview.getSemesterReviewId(), classSemesterReview.getClassesId()));
		}
		return classSemesterReviewsData;
	}
}
