import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploaderService
{

    http:HttpClient;
    

    public constructor(httpService : HttpClient)
    {
     this.http=httpService;
    }

  public uploadFile(fileToUpload: File): Observable<any> {
      const endpoint = environment.apiUrl+'profileImage';
      const formData: FormData = new FormData();
      formData.append('avatar', fileToUpload);
      return this.http
        .post<any>(endpoint, formData);
        
        
  }
  
}