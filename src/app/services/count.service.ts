import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private countUrl = "http://localhost:3000/count/add"
  private getAllcountUrl = "http://localhost:3000/count/all"


  constructor(private http: HttpClient) { }


  
  count(count: any) {
    return this.http.post<any>(this.countUrl, count)
  }
  getAllcount() {
    let data = this.http.get<any>(this.getAllcountUrl);
    return data;
}
}
