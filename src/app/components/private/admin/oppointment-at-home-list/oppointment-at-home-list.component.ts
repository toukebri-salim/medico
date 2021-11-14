import { Component, OnInit } from '@angular/core';
import { OppointmentHomeService } from './../../../../services/oppointment-home.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-oppointment-at-home-list',
  templateUrl: './oppointment-at-home-list.component.html',
  styleUrls: ['./oppointment-at-home-list.component.css','./../../../../../assets/css/sb-admin-2.css','./../../../../../assets/css/css-dash/css/vertical-layout-light/style.css']
})
export class OppointmentAtHomeListComponent implements OnInit {
  oppointmentHomeList: any[] = []

  constructor(private oppointmentHomeService: OppointmentHomeService,private toastr:ToastrService) { }

  ngOnInit(): void {

    this.oppointmentHomeService.getAllOppointmentAtHome().subscribe(
      result => {
        this.oppointmentHomeList = result;
      },
      error => {
        console.log(error);

      }
    )
  }
  delete(p: any) {
    let index = this.oppointmentHomeList.indexOf(p);
    this.oppointmentHomeList.splice(index, 1);
    this.oppointmentHomeService.deleteOppointmentAtHome(p.product._id).subscribe(
      res => {
        this.toastr.error(res.message);
        
      },
      err => {
        console.log(err);

      }
    )
  }

}
