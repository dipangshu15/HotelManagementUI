import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users:any;

  role="";

  @Output() newItemEvent = new EventEmitter();

  constructor(private http:HttpClient,private fb:FormBuilder,private hotelService:HotelServiceService,private router:Router) { }

  registrationForm =this.fb.group({
    userName:[''],
    password:[''],
  })

  onSubmit(){
    //console.log(this.registrationForm.value);
    //let data=JSON.parse(this.registrationForm.value)
    this.hotelService.loginUser(this.registrationForm.value).subscribe(response=>{
      this.role=response.role;
      this.hotelService.setRoleOfUser(this.role);
      console.log();
    alert("Success!");
    if(this.role=="admin"){
      this.router.navigateByUrl("/admin/getAllHotels");
    }
    else if(this.role=="user"){
      this.router.navigateByUrl("/user/seeAllHotel")
    }
    },
    error=>{alert(error.error);
      console.error('Error!',error)
    });
  }

  gotoregistration(){
    this.router.navigate(['/registration'])
  }


  ngOnInit(): void {
  }

}
