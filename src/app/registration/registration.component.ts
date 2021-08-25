import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';
import { user } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user=new user();
  msg='';
 

  constructor(private _service:HotelServiceService, private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    this._service.signUp(this.user).subscribe(
      data=> {
        console.log("Response recieved");
        this._router.navigate(['/login'])
        //this.msg="Registration successfull";
      },
      error=> {
        console.log("exception occured");
        this.msg=error.error;
      }
    )
  }

  gotologin(){
    this._router.navigate(['/login'])
  }


}
