import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { AuthService } from './../auth.service';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employeeportal',
  templateUrl: './employeeportal.component.html',
  styleUrls: ['./employeeportal.component.css']
})
export class EmployeeportalComponent implements OnInit {
  category: string;
  success = false;
  form: NgForm;
  leaveSuccess = false;
  reason: string;
  notices = [];

  constructor(private route: ActivatedRoute, private dateparser: NgbDateParserFormatter, private authService: AuthService, private dataService: DataService) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
    this.dataService.getNoticesAll().subscribe(response => {
      this.notices = response;
    });
  }

  ngOnInit() {
  }

  menu = [
    { name: 'Assigned Projects', key: 'assignedprojects' },
    { name: 'Request For Leave', key: 'requestforleave' },
    { name: 'View Notice', key: 'viewnotice' }
  ];

  empsendLeaveApplication(details) {
    let startdate = this.dateparser.format(details.sdate);
    let enddate = this.dateparser.format(details.edate);
    //console.log(enddate);
    let data = {
      employeeId: this.authService.currentUserId,
      reason: details.reason,
      firstname: this.authService.currentUserfname,
      lastname: this.authService.currentUserlname,
      startdate: startdate,
      enddate: enddate,
    }
    //console.log(this.authService.currentUserId);
    let response = this.dataService.empsendLeaveApplication(data);
    if (response) {
      this.leaveSuccess = true;
      setTimeout(() => this.leaveSuccess = false, 3000);
    }
  }

}
