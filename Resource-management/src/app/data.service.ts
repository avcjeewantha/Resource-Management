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

  prmanagergetNotices() {
    return this.http.get("http://localhost:3000/api/prmanagergetNotices").map(response => {
      //console.log(response.json().data);
      return response.json().data;
    });
  }

  rsmanagergetNotices() {
    return this.http.get("http://localhost:3000/api/rsmanagergetNotices").map(response => {
      //console.log(response.json().data);
      return response.json().data;
    });
  }

  getNoticesAll() {
    return this.http.get("http://localhost:3000/api/getNoticesAll").map(response => {
      //console.log(response.json().data);
      return response.json().data;
    });
  }

  prmanageraddNotice(details) {
    //console.log(details);
    return this.http.post("http://localhost:3000/api/prmanageraddNotice", details).subscribe(response => {
      return response.json();
    });
  }

  prmanagerremoveNotice(notice) {
    //console.log(notice.title);
    return this.http.delete("http://localhost:3000/api/prmanagerremoveNotice", notice).map(response => {
      return response.json();
    });
  }

  rsmanageraddNotice(details) {
    //console.log(details);
    return this.http.post("http://localhost:3000/api/rsmanageraddNotice", details).subscribe(response => {
      return response.json();
    });
  }

  rsmanagerremoveNotice(notice) {
    //console.log(notice.title);
    return this.http.delete("http://localhost:3000/api/rsmanagerremoveNotice", notice).map(response => {
      return response.json();
    });
  }

}