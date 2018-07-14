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
    return this.http.post("http://localhost:3000/api/rsmanagerstoreLeaveData", details).subscribe(response => {
      return response.json();
    });
  }
}