import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-stu-details',
  templateUrl: './stu-details.component.html',
  styleUrls: ['./stu-details.component.css']
})
export class StuDetailsComponent implements OnInit {

  public studentDetails:any = [];
  constructor(private _studentDetails : StudentService) { }

  ngOnInit(): void {
    this._studentDetails.getStudents().subscribe(Data => this.studentDetails = Data);
  }

}
