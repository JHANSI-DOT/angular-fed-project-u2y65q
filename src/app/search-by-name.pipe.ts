import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from "./employee";
@Pipe({
  name: "searchByName"
})
export class SearchByNamePipe implements PipeTransform {
  transform(employees: Employee[], searchTerm?: string): Employee[] {
    if (!employees || !searchTerm) {
      return employees;
    }
    return employees.filter(employee =>
      employee.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  }
}
