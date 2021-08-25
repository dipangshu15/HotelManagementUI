import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-see-all-hotel',
  templateUrl: './see-all-hotel.component.html',
  styleUrls: ['./see-all-hotel.component.css']
})
export class SeeAllHotelComponent implements OnInit {

  hotels:any;

  constructor(private hotelService:HotelServiceService,private  activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    let response=this.hotelService.getAllHotels()
    response.subscribe((data)=>this.hotels=data);
  }

}
