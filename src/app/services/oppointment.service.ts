import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OppointmentService {

  private addOppointmentUrl = "http://localhost:3000/oppointment/add"
  private getAllOppointmentUrl = "http://localhost:3000/oppointment/all"
  private deleteOppointmentUrl = "http://localhost:3000/oppointment/delete/"
  private updateOppointmentUrl = "http://localhost:3000/oppointment/update-info/"
  private getOneoppointmentUrl = "http://localhost:3000/oppointment/one/"
  private getOppointmenByIdUrl = "http://localhost:3000/oppointment/all/"
  private oppointmentsIdUrl = "http://localhost:3000/oppointment/stat"







  constructor(private http: HttpClient) { }
  addOppointment(oppointment: any) {
    return this.http.post<any>(this.addOppointmentUrl, oppointment)
  }

getAllOppointment() {
    let data = this.http.get<any>(this.getAllOppointmentUrl);
    return data;
}
oppointments() {
  let data = this.http.get<any>(this.oppointmentsIdUrl);
  return data;
}
deleteOppointment(id: String) {
  return this.http.delete<any>(this.deleteOppointmentUrl + id)
}
updateOppointment(oppointment: any, id: String) {
  return this.http.put<any>(this.updateOppointmentUrl + id, oppointment)
}
getOneOppointment(id: String) {
  return this.http.get<any>(this.getOneoppointmentUrl + id)
}
getOppointmentById(id: String) {
  return this.http.get<any>(this.getOppointmenByIdUrl + id)
}

}