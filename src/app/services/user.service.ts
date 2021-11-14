import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})

export class UserService {
  private registerUserUrl = "http://localhost:3000/user/register"
  private loginUserUrl = "http://localhost:3000/user/login"
  private getAllUsersUrl = "http://localhost:3000/user/all"
  private deleteUserUrl = "http://localhost:3000/user/delete/"
  private updateUserUrl = "http://localhost:3000/user/update-info/"
  private getOneUserUrl = "http://localhost:3000/user/one/"
  private getUsersUrl = "http://localhost:3000/user/stat"




  constructor(private http: HttpClient) { }
  getAllUsers() {
    let data = this.http.get<any>(this.getAllUsersUrl);
    return data;
  }
  register(user: any) {
    return this.http.post<any>(this.registerUserUrl, user)
  }
  login(user: any) {
    return this.http.post<any>(this.loginUserUrl, user)
  }
  deleteUser(id: String) {
    return this.http.delete<any>(this.deleteUserUrl + id)
  }
   users(){
    let data = this.http.get<any>(this.getUsersUrl);
    return data;
   }
  
  updateUser(user: any, id: String) {
    return this.http.put<any>(this.updateUserUrl + id, user)
  }
  getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }
  isLoggedIn() {
    let token = localStorage.getItem("myToken");
    if (token) {

      return true;
    }
    else {
      return false;
    }

  }
  isLoggedAdmin() {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == "admin") {
        return true;

      } else
        return false;
    }
    else {
      return false;
    }

  }
  isLoggedPatient() {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == "patient") {
        return true;

      } else
        return false;
    }
    else {
      return false;
    }

  }
  isLoggedSecretary() {
    let token = localStorage.getItem("myToken");
    if (token) {
      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);
      if (decodedToken.role == "secretary") {
        return true;

      } else
        return false;
    }
    else {
      return false;
    }

  }
 
}
