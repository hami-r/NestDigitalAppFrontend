import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  employeeLogin = (sendData:any) =>{
    return this.http.post("http://localhost:8080/empLogin",sendData)
  }

  securityGuardLogin = (sendData:any) =>{
    return this.http.post("http://localhost:8080/secGuardLogin",sendData)
  }

  addEmployee = (sendData:any) =>{
    return this.http.post("http://localhost:8080/addEmp",sendData)
  }

  viewEmployee = () => {
    return this.http.get("http://localhost:8080/viewEmp")
  }

  searchEmployee = (sendData:any) =>{
    return this.http.post("http://localhost:8080/searchEmp",sendData)
  }
  
  deleteEmployee = (sendData:any) =>{
    return this.http.post("http://localhost:8080/deleteEmp",sendData)
  }

  editEmployee = (sendData:any) =>{
    return this.http.post("http://localhost:8080/editEmp",sendData)
  }

  addSecGuard = (sendData:any) =>{
    return this.http.post("http://localhost:8080/addSec",sendData)
  }

  viewSecGuard = () => {
    return this.http.get("http://localhost:8080/viewSec")
  }

  viewAllLeaves = () => {
    return this.http.get("http://localhost:8080/viewAllLeaves")
  }

  viewAllPendingLeaves = () => {
    return this.http.get("http://localhost:8080/viewAllPendingLeaves")
  }

  viewAllEmpLogs = () => {
    return this.http.get("http://localhost:8080/viewAllEmpLogs")
  }

  viewAllVisLogs = () => {
    return this.http.get("http://localhost:8080/viewAllVisLogs")
  }

  viewEmpLogsDate = (sendData:any) => {
    return this.http.post("http://localhost:8080/viewEmpLogsOnDate",sendData)
  }

  viewVisLogsDate = (sendData:any) => {
    return this.http.post("http://localhost:8080/viewVisLogsOnDate",sendData)
  }

}
