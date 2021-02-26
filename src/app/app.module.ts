import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { EmployeeListComponent } from "./employee-list.component";
import { AddEmployeeComponent } from "./add-employee.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { EmployeeHomeComponent } from "./employee-home.component";
import { EmployeeDetailsComponent } from "./details.component";
import { EditEmployeeComponent } from "./edit-employee.component";
import { DeleteEmployeeComponent } from "./delete-employee.component";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";
import { Employee } from "./employee";
import { SearchByNamePipe } from "./search-by-name.pipe";
import {NgxPaginationModule} from 'ngx-pagination';

const appRoutes: Routes = [
  { path: "", component: EmployeeHomeComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "addEmployee", component: AddEmployeeComponent },
  { path: "details/:id", component: EmployeeDetailsComponent },
  { path: "editEmployee/:id", component: EditEmployeeComponent },
  { path: "deleteEmployee/:id", component: DeleteEmployeeComponent },
  { path: "**", component: PageNotFoundComponent }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    })
  ],
  declarations: [
    AppComponent,
    EmployeeHomeComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    DeleteEmployeeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent,
    SearchByNamePipe,
    SearchByNamePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
