import { Component, OnInit } from '@angular/core';
import { HotelServiceService } from '../hotel-service.service';
import { user } from '../user';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user= new user();
  constructor(private _service: HotelServiceService) { }

  ngOnInit(): void {
  }
  deleteUser(){
    console.log(this.user)
    this._service.deleteUserFromRemote(this.user).subscribe(
      data=> {
        console.log("Response recieved");
      },
      error=> {
        console.log("exception occured");
      }
    )
  }


}
