import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateFormStudentComponent } from './template-form-student/template-form-student.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ReactFormComponent } from './react-form/react-form.component';
import { HttpClientModule } from "@angular/common/http";
import { EmployeeComponent } from './employee/employee.component';
import { CallWebserviceComponent } from './call-webservice/call-webservice.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormStudentComponent,
    ReactFormComponent,
    EmployeeComponent,
    CallWebserviceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
