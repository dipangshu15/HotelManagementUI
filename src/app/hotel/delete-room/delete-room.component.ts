import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css']
})
export class DeleteRoomComponent implements OnInit {

  id=0;

  constructor(private activatedRoute:ActivatedRoute,private hotelService:HotelServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.id=data.id);
    this.hotelService.deleteRoom(this.id).subscribe(response=>{console.log(response);alert("room deleted")});
  }

}
