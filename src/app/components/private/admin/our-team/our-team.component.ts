import { Component, OnInit } from '@angular/core';
import { CountService } from './../../../../services/count.service';
import { SecretaryService } from './../../../../services/secretary.service';

import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css','./../../../../../assets/css/sb-admin-2.css','./../../../../../assets/css/css-dash/css/vertical-layout-light/style.css' ]
})
export class OurTeamComponent implements OnInit {
  countList: any[] = []
  secretaryList: any[] = []

  constructor(  private countservice: CountService,private secretaryservice: SecretaryService, private toastr: ToastrService, ) { }

  ngOnInit(): void {
    this.secretaryservice.getAllSecretary().subscribe(
      result => {
        this.secretaryList = result;
      },
      error => {
        console.log(error);

      }
    )
    this.countservice.getAllcount().subscribe(
      result => {
        this.countList = result;
      },
      error => {
        console.log(error);

      }
    )
  }


  delete(secretary: any) {
    let index = this.secretaryList.indexOf(secretary);
    this.secretaryList.splice(index, 1);
    this.secretaryservice.deleteSecretary(secretary._id).subscribe(
      res => {
        this.toastr.error(res.message);
        
      },
      err => {
        console.log(err);

      }
    )
  }
}
