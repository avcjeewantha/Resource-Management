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
  startDate;
  endDate;

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
    let startdate = this.dateparser.format(this.startDate);
    let enddate = this.dateparser.format(this.endDate);
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
}
