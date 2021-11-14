import { Component, OnInit } from '@angular/core';
import { OppointmentService } from './../../../../services/oppointment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-oppointment-list',
  templateUrl: './oppointment-list.component.html',
  styleUrls: ['./oppointment-list.component.css','./../../../../../assets/css/sb-admin-2.css','./../../../../../assets/css/css-dash/css/vertical-layout-light/style.css']
})
export class OppointmentListComponent implements OnInit {
  oppointmentList: any[] = []

  constructor(private oppointmentService: OppointmentService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.oppointmentService.getAllOppointment().subscribe(
      result => {
        this.oppointmentList = result;
      },
      error => {
        console.log(error);

      }
    )
  }
  delete(oppointment: any) {
    let index = this.oppointmentList.indexOf(oppointment);
    this.oppointmentList.splice(index, 1);
    this.oppointmentService.deleteOppointment(oppointment._id).subscribe(
      res => {
        this.toastr.error(res.message);
        
      },
      err => {
        console.log(err);

      }
    )
  }
}
