import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API_URI = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {
  }
  getAllEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URI);
  }

}
