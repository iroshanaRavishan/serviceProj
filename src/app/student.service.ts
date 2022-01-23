import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public url : string = "./assets/Data/student.json";
  constructor(private http : HttpClient) { }
  
  public getStudents() : Observable <IStudent []>{
    return this.http.get <IStudent []> (this.url);
  }

}
