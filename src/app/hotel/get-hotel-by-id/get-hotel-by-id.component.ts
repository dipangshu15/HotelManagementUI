import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-get-hotel-by-id',
  templateUrl: './get-hotel-by-id.component.html',
  styleUrls: ['./get-hotel-by-id.component.css']
})
export class GetHotelByIdComponent implements OnInit {


   id=0;
  

  public hide:boolean=true;

  hotels:any[]=[];

  constructor(private fb:FormBuilder,private hotelService:HotelServiceService,private activatedRoute:ActivatedRoute) { 
  }

  registrationForm=this.fb.group({
    hotel_id:['',Validators.required]
  });


  onSubmit(){
    
    //console.log(this.hotels.length);
    //this.hotelService.getId.subscribe(num=>this.id=num);
    //this.hotelService.id.subscribe(data=>alert(data));
    alert(this.id);
   }

   
   

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data=>this.id=data.id);

    
    this.hide=true;
    this.hotels=[];
    let response= this.hotelService.getHotelById(this.id);
    response.subscribe(data=>{this.hotels=[];this.hotels.push(data);this.hide=false;},error=>{alert(error.error)});
    //console.log(this.hotels);
    //console.log(this.parentData);
  }

}
