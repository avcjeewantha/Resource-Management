import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class ProjectmanagerAuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    if (this.authService.currentUser.type === 'projectmanager') {
      return true;
    }
    else {
      this.router.navigate(['/accessdenied']);
      return false;
    }
  }

}
