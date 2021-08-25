import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingDetailsService } from 'src/app/booking-details.service';

@Component({
  selector: 'app-delete-booking',
  templateUrl: './delete-booking.component.html',
  styleUrls: ['./delete-booking.component.css']
})
export class DeleteBookingComponent implements OnInit {

  booking_id:number=0;

  constructor(private fb:FormBuilder,private bdService:BookingDetailsService, private activatedRoute:ActivatedRoute) { }

  bookingDetailsForm =this.fb.group({
    booking_id:['',Validators.required]
  });

 /*  onSubmit(){
    let id=document.getElementById("id");
    let response= this.bdService.deleteBookingDetailsById(id)
    console.log(response);
    response.subscribe(data=>alert(data),error=>alert(error.error));
   } */

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.booking_id=data.booking_id);
    console.log(this.booking_id);
    let response= this.bdService.deleteBookingDetailsById(this.booking_id)
    //console.log(response);
    response.subscribe();
    alert("deletion - success!");
    /* this.router.navigateByUrl("/fetchAllBookingDetails")}; */
  }

}
