import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {
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
    { name: 'Add Employee', key: 'addemployee' },
    { name: 'Get Employee Details', key: 'getemployeedetails' },
    { name: 'View Projects', key: 'viewprojects' },
    { name: 'Leave-Project Manager', key: 'leave-projectmanager' },
    { name: 'Leave-Resource Manager', key: 'leave-resourcemanager' },
    { name: 'Leave-Employees', key: 'leave-employees' }
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
