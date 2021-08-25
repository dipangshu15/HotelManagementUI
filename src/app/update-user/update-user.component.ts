import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from '../hotel-service.service';
import { user } from '../user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user= new user();
  constructor(private _service: HotelServiceService) { }

  ngOnInit(): void {
  }
  updateUser(){
    this.user.role="user";
    console.log(this.user.userName);
    this._service.updateUserFromRemote(this.user).subscribe(
      data=> {
        console.log("Response recieved");
      },
      error=> {
        console.log(error.error)
        ;
      }
    )
  }

}
