import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl='./employees';
  httpOptions={
    headers:new HttpHeaders({'content-type':'application/json'})
  };
  constructor(private http: HttpClient) { }
  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.employeesUrl)
  }
  getEmployee(id:number): Observable<Employee>{
    const url=`${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url)
  }
  addEmployee(employee : Employee): Observable<Employee>{
    return this.http.post<Employee>(this.employeesUrl,employee,this.httpOptions)
  }
  updateEmployee(employee:Employee): Observable<any>{
    return this.http.put(this.employeesUrl,employee,this.httpOptions)
  }
  deleteEmployee(employee:Employee|number):Observable<Employee>{
    const id=employee;
    const url=`${this.employeesUrl}/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions)
  }
}












