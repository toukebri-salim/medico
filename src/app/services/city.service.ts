import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private addCityUrl = "http://localhost:3000/country/add"
  private listCityUrl = "http://localhost:3000/country/all"
  private deleteCityUrl = "http://localhost:3000/country/delete/"


  constructor(private http: HttpClient) { }
  addCity(city: any) {
    return this.http.post<any>(this.addCityUrl, city)
}
listCity() {
  let data = this.http.get<any>(this.listCityUrl);
  return data;
}
deleteCity(id: String) {
  return this.http.delete<any>(this.deleteCityUrl + id)
}
}