import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

declare var Auth0Lock: any;

@Injectable()
export class AppServiceService {
  host:string = 'http://localhost:8080';

  constructor(private http: Http) { }

  loginUserName(username:string) {
    return this.http.get( this.host + '/api/users/' + username)
    .map(response => response.json());
  }

  activeUser(username:string) {
    return this.http.get( this.host + '/api/users/' + username)
    .map(response => response.json());
  }

  getAllJobs() {
    return this.http.get( this.host + '/api/jobs/')
    .map(response => response.json());
  }

    getOneJobs(jobID: string) {
    return this.http.get( this.host + '/api/jobs/' + jobID)
    .map(response => response.json());
  }

}