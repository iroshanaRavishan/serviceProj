import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-list1',
  templateUrl: './emp-list1.component.html',
  styleUrls: ['./emp-list1.component.css']
})
export class EmpList1Component implements OnInit {

  public employeeList1 : any = [];
  constructor(public _employeeList1 : EmployeeService) { }

  ngOnInit(): void {
    this._employeeList1.getEmployees().subscribe(data => this.employeeList1 = data);
  }

}
