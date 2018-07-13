import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
  navigateToPortal() {
    if (this.authService.currentUser.type === 'admin') {
      this.router.navigate(['/portal/admin'], { queryParams: { category: 'dashboard' } });
    }
    else if (this.authService.currentUser.type === 'resourcemanager') {
      this.router.navigate(['/portal/resourcemanager'], { queryParams: { category: 'noticeboard' } });
    }
    else if (this.authService.currentUser.type === 'projectmanager') {
      this.router.navigate(['/portal/projectmanager'], { queryParams: { category: 'upcomingprojects' } });
    }
    else if (this.authService.currentUser.type === 'employee') {
      this.router.navigate(['/portal/employee'], { queryParams: { category: 'noticeboard' } });
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
