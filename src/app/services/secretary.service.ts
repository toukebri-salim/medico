import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecretaryService {
  private addSecretaryUrl = "http://localhost:3000/secretary/add"
  private getAllSecretaryUrl = "http://localhost:3000/secretary/all"
  private deleteSecretaryrUrl = "http://localhost:3000/secretary/delete/"



  constructor(private http: HttpClient) { }

  addsecretary(secretary: any) {
    return this.http.post<any>(this.addSecretaryUrl, secretary)
  }
  getAllSecretary() {
    let data = this.http.get<any>(this.getAllSecretaryUrl);
    return data;
}

deleteSecretary(id: String) {
  return this.http.delete<any>(this.deleteSecretaryrUrl + id)
}
}
