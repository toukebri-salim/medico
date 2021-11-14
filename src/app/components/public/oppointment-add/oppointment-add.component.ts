import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { OppointmentService } from './../../../services/oppointment.service';
import { UserService } from './../../../services/user.service';
import { JwtHelperService } from "@auth0/angular-jwt";

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-oppointment-add',
  templateUrl: './oppointment-add.component.html',
  styleUrls: ['./oppointment-add.component.css']
})
export class OppointmentAddComponent implements OnInit {
  oppointmentAddForm: FormGroup
  public id: any
  constructor(private fb: FormBuilder, private userServices: UserService, private oppointmentService: OppointmentService, private router: Router, private toastr: ToastrService) {
    let formControls = {
      name: new FormControl('',
        [Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(2)]
      ),

      email: new FormControl('',
        [Validators.required,
        Validators.email
        ]),

      phone: new FormControl('',
        [Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(8),]
      ),
      age: new FormControl('',
        [Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.maxLength(3)]
      ),
      description: new FormControl('',
        [Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(2)]
      ),

      date: new FormControl('',
        [Validators.required,
        ]
      ),
      
    }
    this.oppointmentAddForm = this.fb.group(formControls)
  }
  get name() { return this.oppointmentAddForm.get('name') }
  get email() { return this.oppointmentAddForm.get('email') }
  get phone() { return this.oppointmentAddForm.get('phone') }
  get age() { return this.oppointmentAddForm.get('age') }
  get description() { return this.oppointmentAddForm.get('description') }
  get date() { return this.oppointmentAddForm.get('date') }






  ngOnInit(): void {
    let token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token!);
    this.id == decodedToken.id

  }
  addOppointment() {
    let data = this.oppointmentAddForm.value;
    let token = localStorage.getItem("myToken");
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token!);
    let idUser = decodedToken.id
    console.log(idUser);
    


    this.oppointmentService.addOppointment({ ...data, idUser }).subscribe(
      res => {
        this.toastr.success(res.message);

        this.router.navigate(['']);
      },
      err => {
        console.log(err);

      }
    )
  }

}
