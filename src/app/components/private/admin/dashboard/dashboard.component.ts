import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { OppointmentService } from '../../../../services/oppointment.service';
import { OppointmentHomeService } from '../../../../services/oppointment-home.service';
import { MessageService } from '../../../../services/message.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./../../../../../assets/css/sb-admin-2.css','./../../../../../assets/css/css-dash/css/vertical-layout-light/style.css']
})
export class DashboardComponent implements OnInit {
  public users: any
  public oppointments: any
  public oppointmentsHome: any
  public messages: any



  constructor(private userService: UserService,private oppointmentService: OppointmentService,private oppointmentHomeService: OppointmentHomeService,private messageService: MessageService) { }

  ngOnInit(): void {

    this.userService.users().subscribe(
      result => {
        this.users = result;
      },
      error => {
        console.log(error);

      }
    )

    this.oppointmentService.oppointments().subscribe(
      result => {
        this.oppointments = result;
      },
      error => {
        console.log(error);

      }
    )

    this.oppointmentHomeService.oppointmentsHome().subscribe(
      result => {
        this.oppointmentsHome = result;
      },
      error => {
        console.log(error);

      }
    )
    this.messageService.messages().subscribe(
      result => {
        this.messages = result;
      },
      error => {
        console.log(error);

      }
    )
  }

}
