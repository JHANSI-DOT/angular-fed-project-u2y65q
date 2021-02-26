import {Component, OnInit} from '@angular/core';
import {EmployeeService} from './employee.service';
import {Employee} from './employee';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector:'delete-employee',
  template:'deleting...'
})
export class DeleteEmployeeComponent implements OnInit{
  id:number;
  employee:Employee;
  constructor(private employeeService:EmployeeService, private router:Router,private route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe(paramsId => {
        this.id = paramsId.id;
    });
    this.deleteEmployee(this.id);
  }
  deleteEmployee(id):void{
    this.employeeService.deleteEmployee(this.id).subscribe(employee=>{
      this.router.navigate(["/employees"]);
    });
  }
}