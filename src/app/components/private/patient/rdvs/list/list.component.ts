import { Component, OnInit } from '@angular/core';
import { OppointmentService } from './../../../../../services/oppointment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css','./../../../../../../assets/css/sb-admin-2.css','./../../../../../../assets/css/css-dash/css/vertical-layout-light/style.css']
})
export class ListComponent implements OnInit {
  oppointmentByIdList: any[] = []

  constructor(private oppointmentService: OppointmentService,private route:ActivatedRoute) { }

  ngOnInit(): void {

   

    let idUSer = this.route.snapshot.params.id;
    this.oppointmentService.getOppointmentById(idUSer).subscribe(
      result => {
        this.oppointmentByIdList = result;
      },
      error => {
        console.log(error);

      }
    )
  }

}
