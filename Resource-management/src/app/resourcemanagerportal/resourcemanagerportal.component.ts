import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-resourcemanagerportal',
  templateUrl: './resourcemanagerportal.component.html',
  styleUrls: ['./resourcemanagerportal.component.css']
})
export class ResourcemanagerportalComponent implements OnInit {
  category: string;
  success = false;
  form: NgForm;
  leaveSuccess = false;
  reason: string;
  addSuccess = false;
  notices = [];
  noticeSuccess = false;
  closeResult: string;
  subject: string;
  issue: string;
  inquiry: string;
  projects = [];
  projectSuccess = false;
  addedSuccess = false;
  javapeople=[];
  angularpeople=[];
  nodejspeople=[];
  javaactive:boolean;
  angularactive:boolean;
  nodejsactive:boolean;


  constructor(private modalService: NgbModal, private route: ActivatedRoute, private dateparser: NgbDateParserFormatter, private authService: AuthService, private dataService: DataService) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
  }

  ngOnInit() {
    this.dataService.rsmanagergetNotices().subscribe(response => {
      this.notices = response;
    });
    this.dataService.getprojects().subscribe(response => {
      this.projects = response;
    });
  }

  clickedApp: boolean;
  leaveApplications: any;
  employeedetails: any;
  projectID:any

  menu = [
    { name: 'Up Coming Projects', key: 'upcomingprojects' },
    { name: 'Request For Leave', key: 'requestforleave' },
    { name: 'Get Employee Details', key: 'getemployeedetails' },
    { name: 'Add a Notice', key: 'addanotice' },
    { name: 'Inquiries', key: 'inquiries' }
  ];

  rsmanagersendLeaveApplication(details) {
    let startdate = this.dateparser.format(details.sdate);
    let enddate = this.dateparser.format(details.edate);
    //console.log(enddate);
    let data = {
      rsmanagerId: this.authService.currentUserId,
      reason: details.reason,
      firstname: this.authService.currentUserfname,
      lastname: this.authService.currentUserlname,
      startdate: startdate,
      enddate: enddate,
    }
    //console.log(data);
    //console.log(this.authService.currentUserId);
    let response = this.dataService.rsmanagersendLeaveApplication(data);
    if (response) {
      this.leaveSuccess = true;
      setTimeout(() => this.leaveSuccess = false, 3000);
    }
  }

  editNotice(notice) {
    //this.dataService.editNotice(notice);
    console.log(notice);
  }

  removeNotice(notice) {
    //console.log(notice.title);
    let response = this.dataService.rsmanagerremoveNotice(notice);
    if (response) {
      this.noticeSuccess = false;
      this.notices.splice(this.notices.indexOf(notice), 1);
      setTimeout(() => this.noticeSuccess = false, 3000);
      this.subject = "";
      this.issue = "";
    }
  }

  addNotice(details) {
    let response = this.dataService.rsmanageraddNotice(details);
    if (response) {
      this.noticeSuccess = true;
      this.notices.push(details);
      setTimeout(() => this.noticeSuccess = false, 3000);
      this.subject = "";
      this.issue = "";
    }
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  newInquiry(Inquiry) {
    let response = this.dataService.newInquiryTopr(Inquiry);
    if (response) {
      this.success = true;
      setTimeout(() => this.success = false, 3000);
      this.subject = "";
      this.inquiry = "";
    }
  }
  
  getdetails(detailId) {
    //console.log(detailId);
    let id = detailId;
    this.dataService.getdetails(id).subscribe((response) => {
      this.employeedetails = (response);
      //console.log(this.employeedetails);
    });
  }

  empjava(id:number) {
    let pid=id;
    this.projectID =pid;
    //console.log(notice.title);
    this.dataService.getjavapeople().subscribe((response) => {
      this.javapeople = (response);
      //console.log(this.javapeople);
    });
  }

  empangular(id: number) {
    let pid = id;
    this.projectID = pid;
    //console.log(notice.title);
    this.dataService.getangularpeople().subscribe((response) => {
      this.angularpeople = (response);
      //console.log(this.employeedetails);
    });
  }

  empnodejs(id: number) {
    let pid = id;
    this.projectID = pid;
    //console.log(notice.title);
    this.dataService.getnodejspeople().subscribe((response) => {
      this.nodejspeople = (response);
      //console.log(this.employeedetails);
    });
  }

  clickassigned(project) {
    //console.log(notice.title);
    this.dataService.markassigned(project.id);
    this.projectSuccess = true;
    this.projects.splice(this.projects.indexOf(project), 1);
    setTimeout(() => this.projectSuccess = false, 3000);
    this.subject = "";
    this.issue = "";
  }

  assignpeople(people ,projectid:number){
    let response = this.dataService.assignpeople(people.id,projectid);
    if (response) {
      this.success = true;
      setTimeout(() => this.projectSuccess = false, 3000);
      this.subject = "";
      this.inquiry = "";
      if(this.javapeople.some(x=> x===people)){
        this.javapeople.splice(this.javapeople.indexOf(people), 1);
      }
      if (this.angularpeople.some(x => x === people)) {
        this.angularpeople.splice(this.angularpeople.indexOf(people), 1);
      }
      if (this.nodejspeople.some(x => x === people)) {
        this.nodejspeople.splice(this.nodejspeople.indexOf(people), 1);
      }
    }
  }

}
