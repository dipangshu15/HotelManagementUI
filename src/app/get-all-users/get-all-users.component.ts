import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-get-all-users',
  templateUrl: './get-all-users.component.html',
  styleUrls: ['./get-all-users.component.css']
})
export class GetAllUsersComponent implements OnInit {

  users:any;
  userRole="default";
  isAdmin=false;

  
  constructor(private hotelService:HotelServiceService,private  activatedRoute:ActivatedRoute) {
  }


  ngOnInit(){
    let response=this.hotelService.getAllUsersFromRemote()
    response.subscribe((data)=>this.users=data);

    this.activatedRoute.params.subscribe(data=>this.userRole=data.role);

    if(this.userRole=="admin"){
      this.isAdmin=true;
    }
    else if(this.userRole=="user"){
      this.isAdmin=false;
    }
  }

}
