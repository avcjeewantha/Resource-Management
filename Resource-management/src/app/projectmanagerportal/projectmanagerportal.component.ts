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

  constructor(private route: ActivatedRoute, private dateparser: NgbDateParserFormatter, private authService: AuthService, private dataService: DataService) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
  }

  ngOnInit() {
  }

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
}
