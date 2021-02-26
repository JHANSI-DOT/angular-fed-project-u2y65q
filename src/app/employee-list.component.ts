import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
@Component({
  selector:'employee-list',
  templateUrl:'employee-list.component.html'
  })
export class EmployeeListComponent implements OnInit{
  searchText: string;
  employees: Employee[];
   p: number = 1;
  constructor(private employeeService: EmployeeService){}
  ngOnInit(){
    this.getEmployees();
  }
  getEmployees(): void{
    this.employeeService.getEmployees().subscribe(employees=>{
      this.employees=employees
    });
  }
}