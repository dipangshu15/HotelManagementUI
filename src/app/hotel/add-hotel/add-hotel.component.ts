import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
//import { FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { HotelServiceService } from 'src/app/hotel-service.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})
export class AddHotelComponent implements OnInit {

  constructor(private fb:FormBuilder,private hotelService:HotelServiceService,private router:Router) { }

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

  get city(){
    return this.registrationForm.get('city');
  }

  onSubmit(){
    //console.log(this.registrationForm.value);
    this.hotelService.addHotel(this.registrationForm.value).subscribe(response=>{console.log('Success!',response);
    alert("Success!");
  this.router.navigateByUrl("/admin/getAllHotels")},
    error=>console.error('Error!',error));
  }

  ngOnInit(): void {
  }

}
