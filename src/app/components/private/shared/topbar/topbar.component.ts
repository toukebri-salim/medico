import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../../../services/message.service';
import { OppointmentService } from './../../../../services/oppointment.service';
import { OppointmentHomeService } from './../../../../services/oppointment-home.service';
import { UserService } from './../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { tokenName } from '@angular/compiler';


import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css', "./../../../../../assets/css/sb-admin-2.css"]
})
export class TopbarComponent implements OnInit {
  messageList: any[] = []
  oppointmentList: any[] = []
  oppointmentAtHomeList: any[] = []
  public user: any
  usersList: any[] = []
  public isLoggedAdmin!:Boolean;
  public isLoggedPatient!:Boolean
  public firstname: any
  public lastname: any

  public id: any

  constructor(private router: Router,private route :ActivatedRoute,private userService:UserService,private messageService: MessageService, private oppointmentService:OppointmentService,private oppointmentHomeService: OppointmentHomeService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      result => {
        this.usersList = result;
      },
      error => {
        console.log(error);

      }
    )
    
    let token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token!);
    let firstname = decodedToken.firstname
    let lastname = decodedToken.lastname
    this.lastname=decodedToken.lastname
    this.firstname = decodedToken.firstname
    this.id = decodedToken.id

    
    let idUser = this.id;

    this.userService.getOneUser(idUser).subscribe(
      result => {
        this.user = result;
        
      },
      error => {
        console.log(error);

      }
    )

    this.isLoggedAdmin = this.userService.isLoggedAdmin();
    this.isLoggedPatient = this.userService.isLoggedPatient()

    
    this.messageService.listMessage().subscribe(
      result => {
        this.messageList = result;
      },
      error => {
        console.log(error);

      }
      
    );
    this.oppointmentService.getAllOppointment().subscribe(
      result => {
        this.oppointmentList = result;
      },
      error => {
        console.log(error);

      }
      
    );

    this.oppointmentHomeService.getAllOppointmentAtHome().subscribe(
      result => {
        this.oppointmentAtHomeList = result;
      },
      error => {
        console.log(error);

      }
      
    );

    

  

  }

  logout() {
    this.toastr.info("good bye");

    localStorage.removeItem("myToken");

    this.router.navigate(['/login']);
  }


  
}
