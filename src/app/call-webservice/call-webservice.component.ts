import { Component, OnInit } from '@angular/core';
import {Repos} from "../Repos";
import {GitHubService} from "../GitHubService";

@Component({
  selector: 'app-call-webservice',
  templateUrl: './call-webservice.component.html',
  styleUrls: ['./call-webservice.component.css']
})
export class CallWebserviceComponent implements OnInit {
  username = 'DungDz98';
  pageNo= '1';
  sortOn = 'description';
  repos: Repos[] = [];
  errorMsg = '';
  loading = false;

  constructor(private gitHubService: GitHubService) {}

  ngOnInit(): void {
    this.getRepo();
  }

  public getRepo() {
    this.errorMsg = '';
    this.loading = true;
    this.gitHubService.getRepo(this.username, this.pageNo, this.sortOn)
      .subscribe(
      data => this.repos = data,
    (error) => {
        this.errorMsg = error;
        this.loading = false;
    },
        () => this.loading = false
    )
  }

}
