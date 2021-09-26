import { Component, OnInit } from '@angular/core';
import {Employee} from "../Employee";
import {Subscription} from "rxjs";
import {EmployeeService} from "../EmployeeService";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  private subscription?: Subscription;
  public employees: Employee[] = [];
  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.subscription = this.employeeService.getAllEmployee().subscribe(data => {this.employees = data},
      error => console.log(error));
  }

}
