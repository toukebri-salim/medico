import { Component, OnInit } from '@angular/core';
import { CityService } from './../../../../services/city.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css','./../../../../../assets/css/sb-admin-2.css','./../../../../../assets/css/css-dash/css/vertical-layout-light/style.css' ]
})
export class CityListComponent implements OnInit {
  
  cityList: any[] = []

  constructor(private cityService: CityService,private toastr:ToastrService) { }

  
  ngOnInit(): void {
    this.cityService.listCity().subscribe(
      result => {
        this.cityList = result;
      },
      error => {
        console.log(error);

      }
    )
  }

  delete(city: any) {
    let index = this.cityList.indexOf(city);
    this.cityList.splice(index, 1);
    this.cityService.deleteCity(city._id).subscribe(
      res => {
        this.toastr.error(res.message);
        
      },
      err => {
        console.log(err);

      }
    )
  }

}
