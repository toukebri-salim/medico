import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { CityService } from './../../../../services/city.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css','./../../../../../assets/css/sb-admin-2.css','./../../../../../assets/css/css-dash/css/vertical-layout-light/style.css']
})
export class AddCityComponent implements OnInit {
  cityAddForm: FormGroup

  constructor( private toastr:ToastrService ,private fb: FormBuilder,private cityService: CityService, private router:Router) { 

    let formControls = {
      name: new FormControl('',
        [Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(2)]
      ),




    }
    this.cityAddForm = this.fb.group(formControls)
  }
  get name() { return this.cityAddForm.get('name') }

  ngOnInit(): void {
  }

  addCity() {
    let data = this.cityAddForm.value;
    this.cityService.addCity(data).subscribe(
      res => {
        this.toastr.success(res.message);

        this.router.navigate(['/admin/country/list']);
      },
      err => {
        console.log(err);

      }
    )
  }
}
