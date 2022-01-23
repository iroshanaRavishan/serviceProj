import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-stu-list',
  templateUrl: './stu-list.component.html',
  styleUrls: ['./stu-list.component.css']
})
export class StuListComponent implements OnInit {

  public studentList:any = [];
  constructor(private _studentList : StudentService) { }

  ngOnInit(): void {
    this._studentList.getStudents().subscribe(Data => this.studentList = Data)
  }

}
