import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  room="";
  msg='';
 

  constructor(private _service:HotelServiceService, private _router:Router) { }

  ngOnInit(): void {
  }

  updateRoom(){
    this._service.updateRoom(this.room).subscribe(
      data=> {
        console.log("Response recieved");
      
        
      },
      error=> {
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }
  }

