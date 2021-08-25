import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingDetailsService } from 'src/app/booking-details.service';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],
})
export class AddBookingComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private bdService: BookingDetailsService,
    private router : Router
  ) {}

  paymentDetail :any

  bookingDetailsForm = this.fb.group({
    booking_id: ['', Validators.required],
    hotel_id: ['', Validators.required],
    username: ['', Validators.required],
    booked_from: ['', Validators.required],
    booked_to: ['', Validators.required],
    no_of_adults: ['', Validators.required],
    no_of_children: ['', Validators.required],
    totalAmount: ['', Validators.required],
    roomNo: this.fb.array([]),
  });

  get room_no() {
    return this.bookingDetailsForm.get('roomNo') as FormArray;
  }

  add_room_no() {
    this.room_no.push(this.fb.control(''));
  }

  onSubmit() {
    this.bdService.addBookingDetails(this.bookingDetailsForm.value).subscribe(
      (response) => {
        console.log('Success!', response);
        alert('Success!');
      },
      (error) => console.error('Error!', error)
    );
  }

  confirmAndPay() {
    let bookingDetail= {
      "amount" : this.bookingDetailsForm.controls.totalAmount.value
    };

    this.bdService
      .addTransaction(bookingDetail)
      .subscribe((res) => {
        let postObject: any;
        if (res) {
          console.log(res.transaction_id)
          console.log(this.bookingDetailsForm.controls.booking_id.value)
          this.paymentDetail = 
            {
              "transaction" : {
                "transaction_id" : res.transaction_id
              },
              "booking" : {
                  "booking_id" : this.bookingDetailsForm.controls.booking_id.value
              }
          }
          this.bdService.addPayment(this.paymentDetail).subscribe(res=>{
            console.log(res)
            alert("BOOKING SUCCESSFUl : id: " + res.id)
            this.router.navigate([""])
          });
          
        }
      });
      
  }

  ngOnInit(): void {}
}
