import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  constructor(private http: Http) {
  }

  empsendLeaveApplication(details) {
    return this.http.post("http://localhost:3000/api/empstoreLeaveData", details).subscribe(response => {
      return response.json();
    });
  }

  prmanagersendLeaveApplication(details) {
    return this.http.post("http://localhost:3000/api/prmanagerstoreLeaveData", details).subscribe(response => {
      return response.json();
    });
  }
  rsmanagersendLeaveApplication(details) {
    //console.log(details);
    return this.http.post("http://localhost:3000/api/rsmanagerstoreLeaveData", details).subscribe(response => {
      return response.json();
    });
  }
  addEmployee(details) {
    return this.http.post("http://localhost:3000/api/storeEmployee", details).subscribe(response => {
      return response.json();
    });
  }
  
  addProject(details) {
    return this.http.post("http://localhost:3000/api/storeProject", details).subscribe(response => {
      return response.json();
    });
  }
}