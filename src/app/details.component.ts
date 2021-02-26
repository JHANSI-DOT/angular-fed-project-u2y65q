import {Component,OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import { ActivatedRoute } from '@angular/router';
import {Employee} from './employee';
import {Router} from '@angular/router';
@Component({
  templateUrl:'details.component.html'
  })
export class EmployeeDetailsComponent implements OnInit{
  id:number;
  constructor(private router:Router,private employeeService:EmployeeService,private route: ActivatedRoute){}
  employee:Employee;
  ngOnInit(){
    this.route.params.subscribe(paramsId => {
        this.id = paramsId.id;
    });
    this.getEmployee();
  }
  getEmployee():void{
    this.employeeService.getEmployee(this.id).subscribe(employee=>{
      this.employee=employee;
    });
  }
  go_back(){
    this.router.navigate(["/employees"]);
  }
}