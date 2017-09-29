


import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./components/app/app.component";
import { EmployeeComponent } from "./components/employee/employee.component";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [CounterComponent, EmployeeComponent],
    bootstrap: [AppComponent]
})

export class AppModule {

}