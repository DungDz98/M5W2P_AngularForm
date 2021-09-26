import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Repos} from "./Repos";

@Injectable({
  providedIn: 'root'
})
export class GitHubService {
  private base_URL = 'https://api.github.com/';

  constructor(private http: HttpClient) {
  }

  getRepo(username: string, pageNo: string, sortOn: string): Observable<Repos[]> {
    let params = new HttpParams()
      .set('page', pageNo)
      .set('sort', sortOn);
    console.log(params.toString());
    return this.http.get<Repos[]>(this.base_URL + 'users/' + username + '/repos', {params});
  }
}
