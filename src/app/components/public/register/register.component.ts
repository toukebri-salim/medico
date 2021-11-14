import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', './../../../../assets/css/sb-admin-2.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup

  public imageUrl: String = "./../../../../../../assets/img/700x400.png"
  public imageFile!: File

  // "!"  variable image file bch naatiwha valeur  khater maandheech valeur initial  
  constructor(private fb: FormBuilder,private userService: UserService, private router: Router,private toastr:ToastrService) { 
    
    let formControls = {
      image: new FormControl('',
      [Validators.required,
      ]),

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
    this.registerForm = this.fb.group(formControls)

  }

  get image() { return this.registerForm.get('image') }

  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }

  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }



  ngOnInit(): void {

    let isLoggedIn =this.userService.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigate(['/'])}
  }

  onFileSelect(event: any) {
    let reader = new FileReader()
    reader.readAsDataURL(event.target.files[0])
    reader.onload = (event) => this.imageUrl = event.target?.result?.toString()!
    this.imageFile=event.target.files[0]
  }
 

  register() {
    let data = this.registerForm.value;
    const formData=new FormData()

    formData.append("firstname",data.firstname )
    formData.append("lastname",data.lastname )
    formData.append("email",data.email )
    formData.append("password",data.password )
    formData.append("image",this.imageFile)

    this.userService.register(formData).subscribe(
      res=>{
        this.router.navigate(['/login']);
        this.toastr.success("account created ");

      },
      err=>{
        this.toastr.error("account not created please try again ");
    
      }
    ) 
      }
    
    }
    
  
