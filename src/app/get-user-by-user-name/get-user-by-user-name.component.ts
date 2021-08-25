import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-get-user-by-user-name',
  templateUrl: './get-user-by-user-name.component.html',
  styleUrls: ['./get-user-by-user-name.component.css']
})
export class GetUserByUserNameComponent implements OnInit {

  userName: any;
  

  public hide:boolean=true;

users:any[]=[];

  constructor(private fb:FormBuilder,private hotelService:HotelServiceService,private activatedRoute:ActivatedRoute) { 
  }

  registrationForm=this.fb.group({
    hotel_id:['',Validators.required]
  });


  onSubmit(){
    
    
    //alert(this.id);
   }

   
   

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>this.userName=data.userName);

    
    this.hide=true;
    this.users=[];
    let response= this.hotelService.getUserByUserNameFromRemote(this.userName);
    response.subscribe(data=>{this.users=[];this.users.push(data);this.hide=false;},error=>{alert(error.error)});
    
  }


}
