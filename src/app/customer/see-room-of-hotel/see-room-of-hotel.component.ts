import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-see-room-of-hotel',
  templateUrl: './see-room-of-hotel.component.html',
  styleUrls: ['./see-room-of-hotel.component.css']
})
export class SeeRoomOfHotelComponent implements OnInit {

  id=0;

  hotels:any[]=[];

  constructor(private hotelService:HotelServiceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.id=data.id);
    this.hotelService.getHotelById(this.id).subscribe(data=>this.hotels.push(data));
    //console.log(this.hotels);
  }

}
