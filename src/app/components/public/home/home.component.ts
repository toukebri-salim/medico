import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { OppointmentService } from './../../../services/oppointment.service';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
import { UserService } from './../../../services/user.service';
import { SecretaryService } from './../../../services/secretary.service'
import { CountService } from './../../../services/count.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',]
})

export class HomeComponent implements OnInit {
  secretaryList: any[] = []
  countList: any[] = []


  constructor( private router: Router,  private countservice: CountService,private secretaryservice: SecretaryService, private toastr: ToastrService, ) { }
  public isLoggedIn!: Boolean;


  ngOnInit(): void {
    this.secretaryservice.getAllSecretary().subscribe(
      result => {
        this.secretaryList = result;
      },
      error => {
        console.log(error);

      }
    )
    this.countservice.getAllcount().subscribe(
      result => {
        this.countList = result;
      },
      error => {
        console.log(error);

      }
    )
  }

}
