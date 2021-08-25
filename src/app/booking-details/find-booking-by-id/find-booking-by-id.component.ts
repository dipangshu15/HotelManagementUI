import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingDetailsService } from 'src/app/booking-details.service';

@Component({
  selector: 'app-find-booking-by-id',
  templateUrl: './find-booking-by-id.component.html',
  styleUrls: ['./find-booking-by-id.component.css']
})
export class FindBookingByIdComponent implements OnInit {

  bookingId=0;

  public hidden:boolean=true;

  bookingDetails:any[]=[];

  constructor(private fb:FormBuilder, private bdService:BookingDetailsService, private activatedRoute:ActivatedRoute) { }


  findBookingForm=this.fb.group({
    booking_id:['',Validators.required]
  });

  onSubmit(){
    alert(this.bookingId);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>this.bookingId=data.bookingId);
    this.hidden=true;
    let response= this.bdService.fetchBookingDetailsById(this.bookingId);
    response.subscribe(data=>{this.bookingDetails=[];
                              this.bookingDetails.push(data);
                              this.hidden=false;
                            }
                            ,error=>{alert(error.error)}
                      );
                      /* remove these logs before finalising */
    console.log(this.bookingDetails);
  }

}
