import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-get-hotel-by-city',
  templateUrl: './get-hotel-by-city.component.html',
  styleUrls: ['./get-hotel-by-city.component.css']
})
export class GetHotelByCityComponent implements OnInit {

  public hide:boolean=true;

   hotels:any;

   city="";

  constructor(private fb:FormBuilder,private hotelService:HotelServiceService,private activatedRoute:ActivatedRoute) { }

  registrationForm=this.fb.group({
    city:['',Validators.required]
  })

  onSubmit(){
   let response= this.hotelService.getHotelByCity(this.registrationForm.value)
   response.subscribe(data=>{this.hotels=data;this.hide=false;},error=>{alert(error.error)});
   console.log(this.hotels);
   //console.log(this.hotels.length);
     
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.city=data.city);
    let data={"city":this.city};
    //console.log(this.city);
    let response= this.hotelService.getHotelByCity(data);
   response.subscribe(data=>{this.hotels=data;this.hide=false;},error=>{alert(error.error)});
  }

}
