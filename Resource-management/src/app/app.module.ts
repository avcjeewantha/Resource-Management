import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AccessdeniedComponent } from './accessdenied/accessdenied.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { CareersComponent } from './careers/careers.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminportalComponent } from './adminportal/adminportal.component';
import { ResourcemanagerportalComponent } from './resourcemanagerportal/resourcemanagerportal.component';
import { ProjectmanagerportalComponent } from './projectmanagerportal/projectmanagerportal.component';
import { EmployeeportalComponent } from './employeeportal/employeeportal.component';
import { ProjectmanagerAuthGuardService } from './projectmanager-auth-guard.service';
import { ResourcemanagerAuthGuardService } from './resourcemanager-auth-guard.service';
import { EmployeeAuthGuardService } from './employee-auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { AuthGuard } from './auth-guard.service';
import { DataService } from './data.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AccessdeniedComponent,
    BsNavbarComponent,
    CareersComponent,
    CarouselComponent,
    HomeComponent,
    LoginComponent,
    AdminportalComponent,
    ResourcemanagerportalComponent,
    ProjectmanagerportalComponent,
    EmployeeportalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'about', component: AboutComponent },
      { path: 'careers', component: CareersComponent },
      { path: 'portal/admin', component: AdminportalComponent, canActivate: [AuthGuard, AdminAuthGuardService] },
      { path: 'portal/resourcemanager', component: ResourcemanagerportalComponent, canActivate: [AuthGuard, ResourcemanagerAuthGuardService] },
      { path: 'portal/projectmanager', component: ProjectmanagerportalComponent, canActivate: [AuthGuard, ProjectmanagerAuthGuardService] },
      { path: 'portal/employee', component: EmployeeportalComponent, canActivate: [AuthGuard, EmployeeAuthGuardService] },
      { path: 'accessdenied', component: AccessdeniedComponent }]),

    NgbModule.forRoot(),
    HttpModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    DataService,
    AuthGuard,
    AdminAuthGuardService,
    ResourcemanagerAuthGuardService,
    ProjectmanagerAuthGuardService,
    EmployeeAuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
