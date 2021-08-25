import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelManagement';

   activateForm=true;
   activateHotels=false;

   constructor(private _router:Router){
     
  }

 

   setActivateFunction(){
       this.activateForm=false;
       this.activateHotels=true;
     }
   }

  

   
