import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css']
})
export class UpdateHotelComponent implements OnInit {

  constructor(private fb:FormBuilder,private hotelService:HotelServiceService) { }

  registrationForm =this.fb.group({
    hotel_id:['',Validators.required],
    city:['',Validators.required],
    hotel_name:['',Validators.required],
    address:['',Validators.required],
    description:['',Validators.required],
    email:['',Validators.required],
    phone1:['',Validators.required],
    phone2:['',Validators.required],
    website:['',Validators.required],
    rooms:this.fb.array([])
  })

  get rooms(){
    return this.registrationForm.get('rooms') as FormArray;
  }

  addRooms(){
    this.rooms.push(this.fb.control(''));
  }

  onSubmit(){
    //console.log(this.registrationForm.value);
    this.hotelService.updateHotel(this.registrationForm.value).subscribe(response=>{console.log('Success!',response);alert("Success!")},error=>console.error('Error!',error));
  }

  ngOnInit(): void {
  }

}
