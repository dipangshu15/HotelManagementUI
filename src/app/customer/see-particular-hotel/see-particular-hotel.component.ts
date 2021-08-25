import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-see-particular-hotel',
  templateUrl: './see-particular-hotel.component.html',
  styleUrls: ['./see-particular-hotel.component.css']
})
export class SeeParticularHotelComponent implements OnInit {

  id=0;
  

  public hide:boolean=true;

  hotels:any[]=[];

  constructor(private fb:FormBuilder,private hotelService:HotelServiceService,private activatedRoute:ActivatedRoute) { 
  }

  registrationForm=this.fb.group({
    hotel_id:['',Validators.required]
  });


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
