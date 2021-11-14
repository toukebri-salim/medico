import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../services/user.service';
import { OppointmentService } from './../../../../services/oppointment.service';
import { JwtHelperService } from "@auth0/angular-jwt";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css','./../../../../../assets/css/css-sidebar/css/style.css']
})
export class SidebarComponent implements OnInit {
  public isLoggedAdmin!:Boolean;
  public isLoggedPatient!:Boolean
  public id: any

  constructor(private userService:UserService,private oppointmentService:OppointmentService) { }

  ngOnInit(): void {
    this.isLoggedAdmin = this.userService.isLoggedAdmin();
    this.isLoggedPatient = this.userService.isLoggedPatient()
    
    let token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token!);
    let firstname = decodedToken.firstname
    let lastname = decodedToken.lastname
    this.id = decodedToken.id
 
  }
 

}
