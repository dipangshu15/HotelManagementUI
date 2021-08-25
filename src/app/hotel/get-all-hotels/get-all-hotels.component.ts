import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
//import { hotel } from 'src/app/hotel';
import { HotelServiceService } from 'src/app/hotel-service.service';
import {GetHotelByIdComponent} from 'src/app/hotel/get-hotel-by-id/get-hotel-by-id.component'
import { EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-all-hotels',
  templateUrl: './get-all-hotels.component.html',
  styleUrls: ['./get-all-hotels.component.css']
})
export class GetAllHotelsComponent implements OnInit {

  hotels:any;
  userRole="default";
  isAdmin=false;

  
  constructor(private hotelService:HotelServiceService,private  activatedRoute:ActivatedRoute) {
  }


  ngOnInit(){
    let response=this.hotelService.getAllHotels()
    response.subscribe((data)=>this.hotels=data);

    this.activatedRoute.params.subscribe(data=>this.userRole=data.role);

    if(this.userRole=="admin"){
      this.isAdmin=true;
    }
    else if(this.userRole=="user"){
      this.isAdmin=false;
    }

    

    //console.log(this.isAdmin);

    //this.hotelService.setId(2);
    //console.log(this.hotels);

   //let response= this.http.get("http://localhost:7000/getAllHotels");
   //console.log(response);
   //response.subscribe((data)=>this.hotels=data);
   //console.log(this.hotels);
  }

}
