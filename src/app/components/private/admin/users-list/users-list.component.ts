import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css', './../../../../../assets/css/sb-admin-2.css', './../../../../../assets/css/css-dash/css/vertical-layout-light/style.css']
})
export class UsersListComponent implements OnInit {
  usersList: any[] = []



  constructor(private userService: UserService,) { }

  ngOnInit(): void {

    this.userService.getAllUsers().subscribe(
      result => {
        this.usersList = result;
      },
      error => {
        console.log(error);

      }
    )
  }

}
