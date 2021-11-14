import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './../../../../assets/css/sb-admin-2.css',]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public name: any

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private toastr: ToastrService) {
    let formControls = {
      email: new FormControl('',
        [Validators.required,
        Validators.email
        ]
      ),
      password: new FormControl('',
        [Validators.required,
        Validators.minLength(6)]
      ),

    }
    this.loginForm = this.fb.group(formControls)
  }


  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }


  ngOnInit(): void {
    let isLoggedIn =this.userService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate([''])}
    }

    //let isLoggedIn =this.userService.isLoggedIn();
    // if (isLoggedIn) {
    //  this.router.navigate(['/dashboard'])



    /*
login() {
    let data = this.loginForm.value;
this.userService.loginAdmin(user).subscribe(
  res=>{
    console.log(res);
    
    let token = res.token;
    localStorage.setItem("myToken",token);
    this.router.navigate(['/people-list']);

  },
    */

  login() {
    let data = this.loginForm.value;
   
    
    this.userService.login(data).subscribe(
      res => {
        let token = res.token;
        localStorage.setItem("myToken", token);
        
    

        this.toastr.success("welcome");
        this.router.navigate(['']);

        

        
      },
      err => {
        this.toastr.error("account not found verify your e-mail or your password ");

      }
    )
  }


}