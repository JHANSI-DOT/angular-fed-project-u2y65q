import { Component } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { Employee } from "./employee";
import { Router } from "@angular/router";
@Component({
  selector: "add-employee",
  templateUrl: "add-employee.component.html",
  styles: [
    `
      input.ng-invalid {
        border-left: 5px solid red;
      }
      input.ng-valid {
        border-left: 5px solid green;
      }
    `
  ]
})
export class AddEmployeeComponent {
  employees: Employee[] = [];
  fileToUpload: any;
  imageUrl: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  onSubmit(employee): void {
    this.employeeService
      .addEmployee(employee as Employee)
      .subscribe(employee => {
        this.employees.push(employee);
      });
    this.router.navigate(["/employees"]);
  }
}
