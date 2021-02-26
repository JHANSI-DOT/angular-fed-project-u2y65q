import { InMemoryDbService } from "angular-in-memory-web-api";
import { Injectable } from "@angular/core";
import { Employee } from "./employee";

@Injectable({
  providedIn: "root"
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let employees = [
      {
        id: 1,
        name: "Ram",
        image:
          "https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg",
        email: "ram@gmail.com"
      },
      {
        id: 2,
        name: "Raj",
        image:
          "https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg",
        email: "raj@mail.com"
      },
      {
        id: 3,
        name: "Vinay",
        image:
          "https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg",
        email: "vinay@mail.com"
      },
      {
        id: 4,
        name: "Vinaya",
        image:
          "https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg",
        email: "vinaya@mail.com"
      },
      {
        id: 5,
        name: "Viy",
        image:
          "https://image.shutterstock.com/image-vector/man-shirt-tie-businessman-avatar-260nw-548848999.jpg",
        email: "viy@mail.com"
      }
    ];
    return { employees };
  }
}
