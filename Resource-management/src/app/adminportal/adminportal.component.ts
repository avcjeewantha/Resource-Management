import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { NgForm } from '@angular/forms';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './../auth.service';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-adminportal',
  templateUrl: './adminportal.component.html',
  styleUrls: ['./adminportal.component.css']
})
export class AdminportalComponent implements OnInit {
  category: string;
  addSuccess = false;
  form: NgForm;

  constructor(private route: ActivatedRoute, private dataService: DataService, private authService: AuthService, private dateparser: NgbDateParserFormatter) {
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });
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

  
}
