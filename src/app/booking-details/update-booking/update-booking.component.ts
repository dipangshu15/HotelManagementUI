import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { BookingDetailsService } from 'src/app/booking-details.service';

@Component({
  selector: 'app-update-booking',
  templateUrl: './update-booking.component.html',
  styleUrls: ['./update-booking.component.css']
})
export class UpdateBookingComponent implements OnInit {

  constructor(private fb:FormBuilder,private bdService:BookingDetailsService) { }

  bookingDetailsForm =this.fb.group({
    booking_id:['',Validators.required],
    hotel_id:['',Validators.required],
    username:['',Validators.required],
    booked_from:['',Validators.required],
    booked_to:['',Validators.required],
    no_of_adults:['',Validators.required],
    no_of_children:['',Validators.required],
    totalAmount:['',Validators.required],
    roomNo:this.fb.array([])
  })

  get room_no(){
    return this.bookingDetailsForm.get('roomNo') as FormArray;
  }

  add_room_no(){
    this.room_no.push(this.fb.control(''));
  }

 /*  onSubmit(){
    this.bdService.updateBookingDetails(this.bookingDetailsForm.bookibg_id.value,this.bookingDetailsForm.value).subscribe(response=>{console.log('Success!',response);alert("Success!")},error=>console.error('Error!',error));
  } */
  

  ngOnInit(): void {
  }

}
