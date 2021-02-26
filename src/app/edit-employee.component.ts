import { Component } from "@angular/core";
import { EmployeeService } from "./employee.service";
import { ActivatedRoute } from "@angular/router";
import { Employee } from "./employee";
import { Router } from "@angular/router";
@Component({
  selector: "edit-employee",
  templateUrl: "edit-employee.component.html",
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
export class EditEmployeeComponent {
  id: number;
  name: string;

  email: string;

  employee: Employee;
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
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.getEmployee();
  }
  getEmployee(): void {
    this.employeeService.getEmployee(this.id).subscribe(employee => {
      this.employee = employee;
      this.name = employee.name;

      this.email = employee.email;
    });
  }
  onUpdate(employee: Employee): void {
    console.log(employee.name);
    //this.employee.id=this.id;
    this.employee.name = employee.name;

    this.employee.email = employee.email;
    this.updateDetails();
  }
  updateDetails() {
    this.employeeService
      .updateEmployee(this.employee)
      .subscribe(employee => {});
    this.router.navigate(["/employees"]);
  }
}
