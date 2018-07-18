import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projectmanagerportal',
  templateUrl: './projectmanagerportal.component.html',
  styleUrls: ['./projectmanagerportal.component.css']
})
export class ProjectmanagerportalComponent implements OnInit {
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
  viewinquiries = [];
  projectdetails =[];

  constructor(private modalService: NgbModal, private route: ActivatedRoute, private dateparser: NgbDateParserFormatter, private authService: AuthService, private dataService: DataService) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
    this.dataService.prmanagergetinquiries().subscribe(response => {
      this.viewinquiries = response;
    });
  }

  ngOnInit() {
    this.dataService.prmanagergetNotices().subscribe(response => {
      this.notices = response;
    });
  }

  clickedApp: boolean;
  leaveApplications: any;
  employeedetails: any;
 
  menu = [
    { name: 'Up Coming Projects', key: 'upcomingprojects' },
    { name: 'Selected Employees', key: 'selectedemployees' },
    { name: 'Request For Leave', key: 'requestforleave' },
    { name: 'Get Employee Details', key: 'getemployeedetails' },
    { name: 'Add a Notice', key: 'addanotice' },
    { name: 'View Inquiries', key: 'viewinquiries' },
    { name: 'Inquiries', key: 'inquiries' }
  ];

  prmanagersendLeaveApplication(details) {
    let startdate = this.dateparser.format(details.sdate);
    let enddate = this.dateparser.format(details.edate);
    //console.log(enddate);
    let data = {
      prmanagerId: this.authService.currentUserId,
      reason: details.reason,
      firstname: this.authService.currentUserfname,
      lastname: this.authService.currentUserlname,
      startdate: startdate,
      enddate: enddate,
    }
    //console.log(this.authService.currentUserId);
    let response = this.dataService.prmanagersendLeaveApplication(data);
    if (response) {
      this.leaveSuccess = true;
      setTimeout(() => this.leaveSuccess = false, 3000);
    }
  }

  propose(details) {
    let sdate = this.dateparser.format(details.sdate);
    let edate = this.dateparser.format(details.edate); 
    let java = "No";
    let angular = "No";
    let nodejs = "No";
    if ((details.java == 'yes') || (details.java == 'Yes') || (details.java == 'YES')) {
      java = 'Yes';
    }
    if ((details.angular == 'yes') || (details.angular == 'Yes') || (details.angular == 'YES')) {
      angular = 'Yes';
    }
    if ((details.nodejs == 'yes') || (details.nodejs == 'Yes') || (details.nodejs == 'YES')) {
      nodejs = 'Yes';
    }
    let projectDetails = {
      projectid: details.projectid,
      projectname: details.projectname,
      numofemployees: details.numofemployees,
      budget: details.budget,
      sdate: sdate,
      edate: edate,
      java: java,
      angular: angular,
      nodejs: nodejs
    };
    //console.log(projectDetails);
    let response = this.dataService.addProject(projectDetails);
    if (response) {
      this.addSuccess = true;
      setTimeout(() => this.addSuccess = false, 3000);
    }
  }

  editNotice(notice) {
    //this.dataService.editNotice(notice);
    console.log(notice);
  }

  removeNotice(notice) {
    //console.log(notice.title);
    let response =this.dataService.adminremoveNotice(notice.id);
    if (response) {
      this.noticeSuccess = false;
      this.notices.splice(this.notices.indexOf(notice),1);
      setTimeout(() => this.noticeSuccess = false, 3000);
      this.subject = "";
      this.issue = "";
    }
  }

  addNotice(details) {
    let response = this.dataService.prmanageraddNotice(details);
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
    let response = this.dataService.newInquiryToadmin(Inquiry);
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

  getprojectdetails(detailId) {
    //console.log(detailId);
    let id = detailId;
    this.dataService.getprojectdetails(id).subscribe((response) => {
      this.projectdetails = (response);
      //console.log(this.projectdetails);
    });
  }

}
