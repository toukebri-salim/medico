import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { OppointmentService } from './../../../services/oppointment.service';
import { MessageService } from './../../../services/message.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-message',
  templateUrl: './add-message.component.html',
  styleUrls: ['./add-message.component.css']
})
export class AddMessageComponent implements OnInit {

  messageAddForm: FormGroup

  constructor(private fb: FormBuilder, private messageService: MessageService, private router: Router, private toastr: ToastrService) {

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

      numero: new FormControl('',
        [Validators.required,
        ]
      ),
      text: new FormControl('',
        [Validators.required,
        ]
      ),




    }
    this.messageAddForm = this.fb.group(formControls)
  }
  get name() { return this.messageAddForm.get('name') }
  get email() { return this.messageAddForm.get('email') }
  get numero() { return this.messageAddForm.get('numero') }
  get text() { return this.messageAddForm.get('text') }



  ngOnInit(): void {


  }
  addMessage() {
    let data = this.messageAddForm.value;
    this.messageService.addMessage(data).subscribe(
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
