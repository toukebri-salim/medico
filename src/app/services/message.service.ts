import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private addMessageUrl = "http://localhost:3000/message/add"
  private listMessageUrl = "http://localhost:3000/message/all"
  private deleteMessageUrl = "http://localhost:3000/message/delete/"
  private getOneMessageHomeUrl = "http://localhost:3000/message/one/"
  private messagesHomeUrl = "http://localhost:3000/message/stat"




  constructor(private http: HttpClient) { }
  addMessage(oppointment: any) {
    return this.http.post<any>(this.addMessageUrl, oppointment)
  }
  listMessage() {
    let data = this.http.get<any>(this.listMessageUrl);
    return data;

  }
  messages() {
    let data = this.http.get<any>(this.messagesHomeUrl);
    return data;

  }
  deleteMessage(id: String) {
    return this.http.delete<any>(this.deleteMessageUrl + id)
  }
  getOneMessage(id: String) {
    return this.http.get<any>(this.getOneMessageHomeUrl + id)
  }
}
