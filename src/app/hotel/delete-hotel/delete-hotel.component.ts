import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css']
})
export class DeleteHotelComponent implements OnInit {

  id:number=0;

  constructor(private fb:FormBuilder,private hotelService:HotelServiceService,private activatedRoute:ActivatedRoute) { }

  registrationForm=this.fb.group({
    hotel_id:['',Validators.required]
  });

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.id=data.id);
    console.log(this.id);
    let response= this.hotelService.deleteHotel(this.id)
    response.subscribe();
    alert("success!");
   /*  this.router.navigateByUrl("/admin/getAllHotels")}; */
  }

}
