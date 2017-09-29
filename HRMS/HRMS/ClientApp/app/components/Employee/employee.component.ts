
import { Component } from "@angular/core"

@Component({

    selector: "my-employee",
    templateUrl: "./employee.component.html"

})


export class EmployeeComponent {

    fisrtName = "Ratan";
    lastName = "Talukder";
    gender = "Male";
    age = 55;
}