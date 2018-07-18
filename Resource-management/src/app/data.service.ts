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

  prmanagerremoveNotice(id) {
    let data = { id: id };
    return this.http.post("http://localhost:3000/api/prmanagerremoveNotice", data).subscribe(response => {
      return response.json();
    });
  }

  rsmanageraddNotice(details) {
    //console.log(details);
    return this.http.post("http://localhost:3000/api/rsmanageraddNotice", details).subscribe(response => {
      return response.json();
    });
  }

  rsmanagerremoveNotice(id) {
    let data = { id: id };
    return this.http.post("http://localhost:3000/api/rsmanagerremoveNotice", data).subscribe(response => {
      return response.json();
    });
  }

  admingetNotices() {
    return this.http.get("http://localhost:3000/api/admingetNotices").map(response => {
      //console.log(response.json().data);
      return response.json().data;
    });
  }
  adminaddNotice(details) {
    //console.log(details);
    return this.http.post("http://localhost:3000/api/adminaddNotice", details).subscribe(response => {
      return response.json();
    });
  }

  adminremoveNotice(id) {
    let data = { id: id };
    return this.http.post("http://localhost:3000/api/adminremoveNotice", data).subscribe(response => {
      return response.json();
    });
  }

  newInquiryTopr(Inquiry){
    //console.log(Inquiry);
    return this.http.post("http://localhost:3000/api/newInquirytopr",Inquiry).subscribe(response => {
      return response.json();
    });
  }

  newInquiryToadmin(Inquiry) {
    //console.log(Inquiry);
    return this.http.post("http://localhost:3000/api/newInquirytoadmin", Inquiry).subscribe(response => {
      return response.json();
    });
  }

  prmanagergetinquiries() {
    return this.http.get("http://localhost:3000/api/prmanagergetinquiries").map(response => {
      //console.log(response.json().data);
      return response.json().data;
    });
  }

  admingetinquiries() {
    return this.http.get("http://localhost:3000/api/admingetinquiries").map(response => {
      //console.log(response.json().data);
      return response.json().data;
    });
  }

  getLeaveApp_pm() {
    return this.http.get("http://localhost:3000/api/getLeaveApplications_pm").map(response => {
      //console.log(response.json().data);
      return (response.json().data);
    });
  }
  setLeave_pm(leaveid: number, decision: string) {
    let data = { leaveid: leaveid, result: decision };
    console.log(data);
    return this.http.post("http://localhost:3000/api/confirmLeave_pm", data).subscribe(response => {
      return response.json();
    });
  }
  
  deleteLeaveAppliccation_pm(id: number) {
    let leaveId = { 'id': id };
    //console.log(leaveId);
    this.http.delete("http://localhost:3000/api/deleteLeaveApplication_pm" + leaveId).map(response => {
      console.log(response.json().data);
      return (response.json().data);
    });
  }

  getLeaveApp_rm() {
    return this.http.get("http://localhost:3000/api/getLeaveApplications_rm").map(response => {
      //console.log(response.json().data);
      return (response.json().data);
    });
  }
  setLeave_rm(leaveid: number, decision: string) {
    let data = { leaveid: leaveid, result: decision };
    //console.log(data);
    return this.http.post("http://localhost:3000/api/confirmLeave_rm", data).subscribe(response => {
      return response.json();
    });
  }
  deleteLeaveAppliccation_rm(id: number) {
    let leaveId = { 'id': id };
    //console.log(leaveId);
    this.http.delete("http://localhost:3000/api/deleteLeaveApplication_rm" + leaveId).map(response => {
      //console.log(response.json().data);
      return (response.json().data);
    });
  }

  getLeaveApp_em() {
  return this.http.get("http://localhost:3000/api/getLeaveApplications_em").map(response => {
    //console.log(response.json().data);
    return (response.json().data);
  });
  }
  setLeave_em(leaveid: number, decision: string) {
  let data = { leaveid: leaveid, result: decision };
  //console.log(data);
  return this.http.post("http://localhost:3000/api/confirmLeave_em", data).subscribe(response => {
    return response.json();
  });
  } 
  deleteLeaveAppliccation_em(id: number) {
  let leaveId = { 'id': id };
   //console.log(leaveId);
   this.http.delete("http://localhost:3000/api/deleteLeaveApplication_em" + leaveId).map(response => {
    //console.log(response.json().data);
    return (response.json().data);
  });
  }

  getdetails(detailId) {
    return this.http.post('http://localhost:3000/api/getdetails', detailId)
      .map(response => {
        return(response.json().data);      
      });
  }

  getjavapeople() {
    return this.http.get("http://localhost:3000/api/getjavapeople").map(response => {
      //console.log(response.json().data);
      return (response.json().data);
    });
  }

  getangularpeople() {
    return this.http.get("http://localhost:3000/api/getangularpeople").map(response => {
      //console.log(response.json().data);
      return (response.json().data);
    });
  }

  getnodejspeople() {
    return this.http.get("http://localhost:3000/api/getnodejspeople").map(response => {
      //console.log(response.json().data);
      return (response.json().data);
    });
  }

  assignpeople(peopleid: number, projectid: number) {
    let data = { peopleid: peopleid, projectid: projectid };
    //console.log(data);
    return this.http.post("http://localhost:3000/api/assignpeople", data).subscribe(response => {
      return response.json();
    });
  }

  getprojects() {
    return this.http.get("http://localhost:3000/api/getprojects").map(response => {
      //console.log(response.json().data);
      return response.json().data;
    });
  }

  markassigned(projectID: number) {
    let data = {result: projectID};
    //console.log(data);
    return this.http.post("http://localhost:3000/api/markassigned", data).subscribe(response => {
      return response.json();
    });
  }

  getProjectids(userid:number) {
    let data = { userid: userid };
    return this.http.post('http://localhost:3000/api/getprojectids', data)
      .map(response => {
        return (response.json().data);
      });
  }

  getprojectdetails(detailId) {
    //console.log(detailId);
    return this.http.post('http://localhost:3000/api/getprojectdetails', detailId)
      .map(response => {
        return (response.json().data);
      });
  }

}