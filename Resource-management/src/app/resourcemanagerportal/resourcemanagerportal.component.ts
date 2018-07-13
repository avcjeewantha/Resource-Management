import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resourcemanagerportal',
  templateUrl: './resourcemanagerportal.component.html',
  styleUrls: ['./resourcemanagerportal.component.css']
})
export class ResourcemanagerportalComponent implements OnInit {
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
    { name: 'Up Coming Projects', key: 'upcomingprojects' },
    { name: 'Request For Leave', key: 'requestforleave' },
    { name: 'Get Employee Details', key: 'getemployeedetails' },
    { name: 'Add a Notice', key: 'addanotice' },
    { name: 'Inquiries', key: 'inquiries' }
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
