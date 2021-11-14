import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../../services/user.service'
import { ToastrService } from 'ngx-toastr';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRoute, Router } from '@angular/router';
import { tokenName } from '@angular/compiler';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css',]
})
export class NavbarComponent implements OnInit {
  //public firstname: any
  //public lastname: any
  public isLoggedAdmin!:Boolean;
  public isLoggedPatient!:Boolean;
  public isLoggedSecretary!:Boolean

   public id: any
   public isLoggedIn!: Boolean;

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService, private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.isLoggedAdmin = this.userService.isLoggedAdmin();
    this.isLoggedPatient = this.userService.isLoggedPatient();
    this.isLoggedSecretary = this.userService.isLoggedSecretary()
    this.isLoggedIn = this.userService.isLoggedIn()


   

   
    //get one by id 
    //let token = localStorage.getItem("myToken");
    //let idUser = this.route.snapshot.params.id;
   // this.userService.getOneUser(idUser).subscribe(
    //  res => {
       
    ///  },
    //  err => {
    //    console.log(err);

     // }
    //)
//btoken
  



  }



 
 
  logout() {
    this.toastr.info("good bye");

    localStorage.removeItem("myToken");

    this.router.navigate(['/login']);
  }
}
