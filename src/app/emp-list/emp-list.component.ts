import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  public empList:any = [];
  constructor(private _employeeList : EmployeeService) { }

  ngOnInit(): void {
    this.empList = this._employeeList.getEmployees();
  }

}
