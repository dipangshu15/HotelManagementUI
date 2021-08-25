import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  city:String="";
  role="";

  constructor(private activatedRoute:ActivatedRoute) { }

  getCity():String{
    return this.city;
  }

  setCity(city:String){
    this.city=city;
  }
 

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>this.role=data.role);

  }

}
