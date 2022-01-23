import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-details1',
  templateUrl: './emp-details1.component.html',
  styleUrls: ['./emp-details1.component.css']
})
export class EmpDetails1Component implements OnInit {

  public empDetails1 : any = [];

  constructor(private employeeDetails : EmployeeService) { }

  ngOnInit(): void {
   this.employeeDetails.getEmployees().subscribe(data => this.empDetails1 = data);
  }

}
