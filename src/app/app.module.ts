import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { EmployeeService } from './employee.service';
import { EmpList1Component } from './emp-list1/emp-list1.component';
import { EmpDetails1Component } from './emp-details1/emp-details1.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StuListComponent } from './stu-list/stu-list.component';
import { StuDetailsComponent } from './stu-details/stu-details.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkDetailsComponent } from './work-details/work-details.component';
import { WorkersService } from './workers.service';
import { InfoComponent } from './info/info.component';
import { InformationService } from './information.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    EmpListComponent,
    EmpList1Component,
    EmpDetails1Component,
    StuListComponent,
    StuDetailsComponent,
    WorkListComponent,
    WorkDetailsComponent,
    InfoComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule    
  ],
  providers: [EmployeeService,StudentService,WorkersService,InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
