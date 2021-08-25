import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingDetailsService } from 'src/app/booking-details.service';

@Component({
  selector: 'app-fetch-all-booking',
  templateUrl: './fetch-all-booking.component.html',
  styleUrls: ['./fetch-all-booking.component.css']
})
export class FetchAllBookingComponent implements OnInit {

  constructor(private bdService:BookingDetailsService, private  activatedRoute:ActivatedRoute) { }

  bookingDetailsAll: any;

  ngOnInit(): void {    
    let response=this.bdService.fetchAllBookingDetails()
    response.subscribe((data)=>this.bookingDetailsAll=data);

  }

}
