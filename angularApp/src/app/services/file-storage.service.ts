import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FileStorage } from './file-storage';

@Injectable()
export class FileStorageService {

  constructor(private http: HttpClient) { }

  public getCurrentClassInfo(): Observable<FileStorage> {
    console.log('Made it to the service');
    return this.http.get<FileStorage>("http://localhost:8080/getFile/fileId={fileId}");
  };

  public addFileToStorage(fileStorage: FileStorage) {
    console.log(fileStorage);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Response>('http://localhost:8080/addFile', JSON.stringify(fileStorage), httpOptions).subscribe(res => console.log(res));
  }
}
