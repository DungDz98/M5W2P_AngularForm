import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-form-student',
  templateUrl: './template-form-student.component.html',
  styleUrls: ['./template-form-student.component.css']
})
export class TemplateFormStudentComponent implements OnInit {
  student = {
    studentCode: '001',
    studentName: 'Dũng',
    studentAddress: 'Hà Nội'
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(createStudentForm: NgForm) {
    console.log(createStudentForm.value);
  }
}
