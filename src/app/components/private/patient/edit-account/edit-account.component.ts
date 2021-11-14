import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css', './../../../../../assets/css/sb-admin-2.css', './../../../../../assets/css/css-dash/css/vertical-layout-light/style.css']
})
export class EditAccountComponent implements OnInit {

  public editAccountForm: FormGroup

  public user: any

  public userList: any


  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute, private userService: UserService, private toastr: ToastrService) {
    let formControls = {
      firstname: new FormControl('',
        [Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(2)]
      ),
      lastname: new FormControl('',
        [Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(2)
        ]),

      email: new FormControl('',
        [Validators.required,
        Validators.email
        ]),
      password: new FormControl('',
        [Validators.required,
        Validators.minLength(6)
        ]),
      repassword: new FormControl('',
        [Validators.required,
        ]),
    }
    this.editAccountForm = this.fb.group(formControls)
  }

  get firstname() { return this.editAccountForm.get('firstname') }
  get lastname() { return this.editAccountForm.get('lastname') }
  get email() { return this.editAccountForm.get('email') }
  get password() { return this.editAccountForm.get('password') }
  get repassword() { return this.editAccountForm.get('repassword') }




  ngOnInit(): void {


    let idUser = this.route.snapshot.params.id;
    this.userService.getOneUser(idUser).subscribe(
      res => {
        this.userList = res;

        let user = res;
        this.editAccountForm.patchValue({
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          password: user.password


        })

      },
      err => {
        console.log(err);

      }
    )
  }

  updateUser() {
    let data = this.editAccountForm.value;
    let token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token!);
    let idUser = decodedToken.id

    this.userService.updateUser(data, idUser).subscribe(
      res => {
        this.toastr.warning(res.message);


      },
      err => {
        console.log(err);

      }
    )

  }

  delete() {
    let token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token!);
    let idUser = decodedToken.id

    this.userService.deleteUser(idUser).subscribe(
      res => {


        this.toastr.success(res.message);

        this.router.navigate(['']);
        localStorage.removeItem("myToken");

      },
      err => {
        console.log(err);

      }
    )
  }

}
