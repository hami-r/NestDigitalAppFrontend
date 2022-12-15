import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AddSecurityguardComponent } from './add-securityguard/add-securityguard.component';
import { ViewSecurityguardComponent } from './view-securityguard/view-securityguard.component';
import { ViewAllLeavesComponent } from './view-all-leaves/view-all-leaves.component';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { ViewAllLogsComponent } from './view-all-logs/view-all-logs.component';
import { ViewLogsByDateComponent } from './view-logs-by-date/view-logs-by-date.component';
import { ViewProfileEmpComponent } from './view-profile-emp/view-profile-emp.component';
import { ViewProfileSecGuardComponent } from './view-profile-sec-guard/view-profile-sec-guard.component';
import { EmpApplyLeaveComponent } from './emp-apply-leave/emp-apply-leave.component';
import { ViewEmpLeavComponent } from './view-emp-leav/view-emp-leav.component';
import { EmployeeNavbarComponent } from './employee-navbar/employee-navbar.component';
import { SecGuardNavbarComponent } from './sec-guard-navbar/sec-guard-navbar.component';
import { EntryLogsComponent } from './entry-logs/entry-logs.component';
import { EntryLogsVisComponent } from './entry-logs-vis/entry-logs-vis.component';
import { ViewAllLogsSecComponent } from './view-all-logs-sec/view-all-logs-sec.component';

let myRoutes:Routes = [
  {
    path:"",
    component:AdminLoginComponent
  },
  {
    path:"empLogin",
    component:EmployeeLoginComponent
  },
  {
    path:"secLogin",
    component:SecurityLoginComponent
  },
  {
    path:"addEmp",
    component:AddEmployeeComponent
  },
  {
    path:"viewEmp",
    component:ViewEmployeesComponent
  },
  {
    path:"searchEmp",
    component:SearchEmployeeComponent
  },
  {
    path:"addSecGuard",
    component:AddSecurityguardComponent
  },
  {
    path:"viewSecGuard",
    component:ViewSecurityguardComponent
  },
  {
    path:"viewAllLeaves",
    component:ViewAllLeavesComponent
  },
  {
    path:"applyLeave",
    component:ApplyLeaveComponent
  },
  {
    path:"viewAllLogs",
    component:ViewAllLogsComponent
  },
  {
    path:"viewLogsDate",
    component:ViewLogsByDateComponent
  },
  {
    path:"viewEmpProfile",
    component:ViewProfileEmpComponent
  },
  {
    path:"viewSecGuardProfile",
    component:ViewProfileSecGuardComponent
  },
  {
    path:"applyLeaveEmp",
    component:EmpApplyLeaveComponent
  },
  {
    path:"viewEmpLeave",
    component:ViewEmpLeavComponent
  },
  {
    path:"EmpLogEntry",
    component:EntryLogsComponent
  },
  {
    path:"VisLogEntry",
    component:EntryLogsVisComponent
  },
  {
    path:"ViewLogsSec",
    component:ViewAllLogsSecComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    SecurityLoginComponent,
    AddEmployeeComponent,
    ViewEmployeesComponent,
    SearchEmployeeComponent,
    AdminNavbarComponent,
    AddSecurityguardComponent,
    ViewSecurityguardComponent,
    ViewAllLeavesComponent,
    ApplyLeaveComponent,
    ViewAllLogsComponent,
    ViewLogsByDateComponent,
    ViewProfileEmpComponent,
    ViewProfileSecGuardComponent,
    EmpApplyLeaveComponent,
    ViewEmpLeavComponent,
    EmployeeNavbarComponent,
    SecGuardNavbarComponent,
    EntryLogsComponent,
    EntryLogsVisComponent,
    ViewAllLogsSecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
