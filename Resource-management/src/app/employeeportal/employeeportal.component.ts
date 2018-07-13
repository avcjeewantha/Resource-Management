import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employeeportal',
  templateUrl: './employeeportal.component.html',
  styleUrls: ['./employeeportal.component.css']
})
export class EmployeeportalComponent implements OnInit {
  category: string;
  success = false;
  form: NgForm;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
    //this.dataService.getNotices().subscribe(response => {
    //this.notices = response;
    //});
  }

  ngOnInit() {
  }

  menu = [
    { name: 'Assigned Projects', key: 'assignedprojects' },
    { name: 'Request For Leave', key: 'requestforleave' },
    { name: 'View Notice', key: 'viewnotice' }
  ];


  // newInquiry(Inquiry) {
  //  let response = this.dataService.newInquiry(Inquiry);
  //  if (response) {
  //   this.success = true;
  //   setTimeout(() => this.success = false, 3000);
  //  this.subject = "";
  //  this.inquiry = "";
  //  }
  // }
}
