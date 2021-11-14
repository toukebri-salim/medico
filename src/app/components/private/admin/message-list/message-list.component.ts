import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../../../services/message.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css','./../../../../../assets/css/sb-admin-2.css','./../../../../../assets/css/css-dash/css/vertical-layout-light/style.css']
})
export class MessageListComponent implements OnInit {
  messageList: any[] = []

  constructor(private messageService: MessageService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.messageService.listMessage().subscribe(
      result => {
        this.messageList = result;
      },
      error => {
        console.log(error);

      }
    )
  }

  delete(message: any) {
    let index = this.messageList.indexOf(message);
    this.messageList.splice(index, 1);
    this.messageService.deleteMessage(message._id).subscribe(
      res => {
        this.toastr.error(res.message);
        
      },
      err => {
        console.log(err);

      }
    )
  }
}
