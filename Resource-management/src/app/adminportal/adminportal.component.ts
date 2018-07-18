import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './../auth.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {
  category: string;
  addSuccess = false;
  form: NgForm;
  viewinquiries = [];
  closeResult: string;

  constructor(private modalService: NgbModal,private route: ActivatedRoute, private dataService: DataService, private authService: AuthService, private dateparser: NgbDateParserFormatter) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
    this.dataService.admingetinquiries().subscribe(response => {
      this.viewinquiries = response;
    });
  }

  ngOnInit() {
  }

  clickedApp: boolean;
  leaveApplications: any;
  employeedetails: any;
  projectdetails: any;

  menu = [
    { name: 'Add Employee', key: 'addemployee' },
    { name: 'Get Employee Details', key: 'getemployeedetails' },
    { name: 'View Projects', key: 'viewprojects' },
    { name: 'View Inquiries', key: 'viewinquiries' },
    { name: 'Leave-Project Manager', key: 'leave-projectmanager' },
    { name: 'Leave-Resource Manager', key: 'leave-resourcemanager' },
    { name: 'Leave-Employees', key: 'leave-employees' }
  ];

  register(details) {
    let dob = this.dateparser.format(details.dob);
    let sdate = this.dateparser.format(details.sdate);
    let java ="No";
    let angular ="No";
    let nodejs = "No";
    if ((details.java == 'yes') || (details.java == 'Yes') || (details.java == 'YES')){
      java = 'Yes';
    }
    if ((details.angular == 'yes') || (details.angular == 'Yes') || (details.angular == 'YES')) {
      angular = 'Yes';
    }
    if ((details.nodejs == 'yes') || (details.nodejs == 'Yes') || (details.nodejs == 'YES')) {
      nodejs = 'Yes';
    }
    let registerDetails = {
      firstname: details.fn,
      lastname: details.ln,
      address: details.address,
      city: details.city,
      sdate: sdate,
      birthday: dob,
      phnnum: details.phnnum,
      email: details.email,
      java: java,
      angular: angular,
      nodejs: nodejs
    };
    //console.log(registerDetails);
    let response = this.dataService.addEmployee(registerDetails);
    if (response) {
      this.addSuccess = true;
      setTimeout(() => this.addSuccess = false, 3000);
    }
  }

  getLeaveApplications_pm() {
    this.dataService.getLeaveApp_pm().subscribe((response) => {
      this.leaveApplications = (response);
    });
  }

  setLeave_pm(leaveid: number, result: boolean) {
    //console.log(leaveid);
    var decision = 'disapproved';
    if (result) { decision = 'approved'; }
    this.dataService.setLeave_pm(leaveid, decision);
    this.dataService.deleteLeaveAppliccation_pm(leaveid);
    var index = this.leaveApplications.indexOf(this.leaveApplications.leaveid = leaveid);
    this.leaveApplications.splice(index + 1, 1);
  }
  //method for the popup menu
  open(content) {
    this.modalService.open(content, {}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  //method for the popup menu
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getLeaveApplications_rm() {
    this.dataService.getLeaveApp_rm().subscribe((response) => {
      this.leaveApplications = (response);
    });
  }

  setLeave_rm(leaveid: number, result: boolean) {
    //console.log(leaveid);
    var decision = 'disapproved';
    if (result) { decision = 'approved'; }
    this.dataService.setLeave_rm(leaveid, decision);
    this.dataService.deleteLeaveAppliccation_rm(leaveid);
    var index = this.leaveApplications.indexOf(this.leaveApplications.leaveid = leaveid);
    this.leaveApplications.splice(index + 1, 1);
  }

  getLeaveApplications_em() {
    this.dataService.getLeaveApp_em().subscribe((response) => {
      this.leaveApplications = (response);
    });
  }

  setLeave_em(leaveid: number, result: boolean) {
    //console.log(leaveid);
    var decision = 'disapproved';
    if (result) { decision = 'approved'; }
    this.dataService.setLeave_em(leaveid, decision);
    this.dataService.deleteLeaveAppliccation_em(leaveid);
    var index = this.leaveApplications.indexOf(this.leaveApplications.leaveid = leaveid);
    this.leaveApplications.splice(index + 1, 1);
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
