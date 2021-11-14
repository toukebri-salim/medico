import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { OppointmentService } from './../../../../services/oppointment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-oppointment-update',
  templateUrl: './oppointment-update.component.html',
  styleUrls: ['./oppointment-update.component.css',"./../../../../../assets/css/sb-admin-2.css","./../../../../../assets/css/css-dash/css/vertical-layout-light/style.css"]
})
export class OppointmentUpdateComponent implements OnInit {
  updateOppointmentsForm: FormGroup

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private oppointmentService: OppointmentService, private router: Router,private toastr: ToastrService) {


    let formControls = {
      reply: new FormControl('',
        [Validators.required,
        Validators.pattern("[a-z . '-]+"),
        Validators.minLength(1)]
      ),


    }
    this.updateOppointmentsForm = this.fb.group(formControls)

   }
   get reply() { return this.updateOppointmentsForm.get('reply') }

   ngOnInit(): void {

    let idOppointment = this.route.snapshot.params.id;
    this.oppointmentService.getOneOppointment(idOppointment).subscribe(
      res => {
        let oppointment = res;
        this.updateOppointmentsForm.patchValue({
          reply: oppointment.reply,
        

        })
       
      },
      err => {
        console.log(err);

      }
    )

  }

  updateOppointment() {
    let data = this.updateOppointmentsForm.value;
    let idOppointment = this.route.snapshot.params.id;

    this.oppointmentService.updateOppointment(data, idOppointment).subscribe(
      res => {
        this.toastr.warning(res.message);

        this.router.navigate(['/admin/oppointment/list']);

      },
      err => {
        console.log(err);

      }
    )

  }

}
