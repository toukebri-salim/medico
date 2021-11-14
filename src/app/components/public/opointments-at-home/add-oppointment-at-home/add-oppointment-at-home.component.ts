import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { CityService } from './../../../../services/city.service'
import { OppointmentHomeService } from './../../../../services/oppointment-home.service'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-oppointment-at-home',
  templateUrl: './add-oppointment-at-home.component.html',
  styleUrls: ['./add-oppointment-at-home.component.css']
})
export class AddOppointmentAtHomeComponent implements OnInit {
  public cityList: any[] = []
  public addOppointmentAtHomeForm: FormGroup

  constructor(private fb: FormBuilder, private cityService: CityService, private oppointmentHomeService: OppointmentHomeService, private router: Router, private toastr: ToastrService) {

    let formControls = {
      name: new FormControl('',
        [Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(2)]
      ),
      description: new FormControl('',
        [Validators.required,
        ]),
      age: new FormControl('',
        [Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.maxLength(3)
        ]),
      email: new FormControl('',
        [Validators.required,
        Validators.email

        ]),
      idCountry: new FormControl('',
        [Validators.required,
        ]),
      adresse: new FormControl('',
        [Validators.required,
        ]),
      date: new FormControl('',
        [Validators.required,
        ]),
      phone: new FormControl('',
        [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8)
        ]),
    }
    this.addOppointmentAtHomeForm = this.fb.group(formControls)

  }

  get name() { return this.addOppointmentAtHomeForm.get('name') }
  get email() { return this.addOppointmentAtHomeForm.get('email') }
  get phone() { return this.addOppointmentAtHomeForm.get('phone') }
  get age() { return this.addOppointmentAtHomeForm.get('age') }
  get description() { return this.addOppointmentAtHomeForm.get('description') }
  get date() { return this.addOppointmentAtHomeForm.get('date') }
  get adresse() { return this.addOppointmentAtHomeForm.get('adresse') }
  get idCountry() { return this.addOppointmentAtHomeForm.get('idCountry') }


  ngOnInit(): void {
    this.cityService.listCity().subscribe(
      result => {
        this.cityList = result;
      },
      error => {
        console.log(error);

      }
    )
  }
  addOppointmentAtHome() {
    let data = this.addOppointmentAtHomeForm.value;
    this.oppointmentHomeService.addOppointmentAtHome(data).subscribe(
      res => {
        this.toastr.success(res.message);

      },
      err => {
        this.toastr.success(err.message);

      }
    )
  }



}
