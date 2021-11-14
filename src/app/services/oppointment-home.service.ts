import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OppointmentHomeService {
  private addOppointmentAtHomeUrl = "http://localhost:3000/oppointmentAtHome/add"
  private getAllOppointmentAtHomeUrl = "http://localhost:3000/oppointmentAtHome/all"
  private deleteOppointmentAtHomeUrl = "http://localhost:3000/oppointmentAtHome/delete/"
  private updateOppointmentAtHomeUrl = "http://localhost:3000/oppointmentAtHome/update-info/"
  private getOneOppointmentAtHomeUrl = "http://localhost:3000/oppointmentAtHome/one/"
  private oppointmentHomeUrl = "http://localhost:3000/oppointmentAtHome/stat"




  constructor(private http: HttpClient) { }

  addOppointmentAtHome(oppointmentAtHome: any) {
    return this.http.post<any>(this.addOppointmentAtHomeUrl, oppointmentAtHome)
  }
  getAllOppointmentAtHome() {
    let data = this.http.get<any>(this.getAllOppointmentAtHomeUrl);
    return data;
  }
  oppointmentsHome() {
    let data = this.http.get<any>(this.oppointmentHomeUrl);
    return data;
  }
  deleteOppointmentAtHome(id: String) {
    return this.http.delete<any>(this.deleteOppointmentAtHomeUrl + id)
  }
  updateOppointmentAtHome(oppointmentAtHome: any, id: String) {
    return this.http.put<any>(this.updateOppointmentAtHomeUrl + id, oppointmentAtHome)
  }
  getOneOppointment(id: String) {
    return this.http.get<any>(this.getOneOppointmentAtHomeUrl + id)
  }
  

}
