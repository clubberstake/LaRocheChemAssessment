package laroche.chem.assessment.restApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import laroche.chem.assessment.entities.FileStorage;
import laroche.chem.assessment.repositories.FileStorageRepository;

@RestController
public class FileStorageController {
	
	@Autowired
	private FileStorageRepository fileStorageRepository;

	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/addFile")
	public ResponseEntity<Void> addFile(@RequestBody FileStorage fileToStore) {
 		System.out.println(fileToStore.getId());
 		fileStorageRepository.save(fileToStore);
 		return ResponseEntity.status(HttpStatus.OK).build(); 
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/getFile/fileId={fileId}")
	public FileStorage getFile(@PathVariable long fileId) {
 		return fileStorageRepository.findOne(fileId); 
	}
}
