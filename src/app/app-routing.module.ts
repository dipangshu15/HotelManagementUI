import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GetAllHotelsComponent} from './hotel/get-all-hotels/get-all-hotels.component';
import {GetHotelByCityComponent} from './hotel/get-hotel-by-city/get-hotel-by-city.component';
import {AddHotelComponent} from './hotel/add-hotel/add-hotel.component'
import {GetHotelByIdComponent} from './hotel/get-hotel-by-id/get-hotel-by-id.component'
import {DeleteHotelComponent} from './hotel/delete-hotel/delete-hotel.component'
import {GetRoomByHotelIdComponent} from './hotel/get-room-by-hotel-id/get-room-by-hotel-id.component'
import { UserComponent} from './user/user.component'
import {HotelComponent} from './hotel/hotel.component';
import { CustomerComponent } from './customer/customer.component'
import {SeeAllHotelComponent} from './customer/see-all-hotel/see-all-hotel.component';
import {SearchHotelByCityComponent} from './customer/search-hotel-by-city/search-hotel-by-city.component';
import {SeeParticularHotelComponent} from './customer/see-particular-hotel/see-particular-hotel.component';
import {SeeRoomOfHotelComponent} from './customer/see-room-of-hotel/see-room-of-hotel.component';
import {DeleteRoomComponent} from './hotel/delete-room/delete-room.component';
import {UpdateRoomComponent} from './hotel/update-room/update-room.component';
import {RegistrationComponent} from './registration/registration.component'
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { GetUserByUserNameComponent } from './get-user-by-user-name/get-user-by-user-name.component';
import{UpdateHotelComponent} from './hotel/update-hotel/update-hotel.component';
import { AddBookingComponent } from './booking-details/add-booking/add-booking.component';
import { DeleteBookingComponent } from './booking-details/delete-booking/delete-booking.component';
import { FetchAllBookingComponent } from './booking-details/fetch-all-booking/fetch-all-booking.component';
import { FindBookingByIdComponent } from './booking-details/find-booking-by-id/find-booking-by-id.component';
import { UpdateBookingComponent } from './booking-details/update-booking/update-booking.component';
//import {HomeComponent} from './home/home.component'

const routes: Routes = [
  //{path:'',component:UserComponent},
  {path:'admin',component:HotelComponent,pathMatch:'full'},
  {path:'admin/getAllHotels',component:GetAllHotelsComponent},
  {path:'admin/getHotelByCity/:city',component:GetHotelByCityComponent},
  {path:'admin/addHotel',component:AddHotelComponent},
  {path:'admin/getHotelById/:id',component:GetHotelByIdComponent},
  {path:'admin/deleteHotel/:id',component:DeleteHotelComponent},
  {path:'admin/updateHotel',component:UpdateHotelComponent},
  {path:'admin/getRoomByHotelId/:id',component:GetRoomByHotelIdComponent},
  {path:'admin/deleteRoom/:id',component:DeleteRoomComponent},
  {path:'admin/updateRoom/:id',component:UpdateRoomComponent},
  {path:'admin/updateUser',component:UpdateUserComponent},
  {path:'admin/deleteUser',component:DeleteUserComponent},
  {path:'admin/getAllUser',component:GetAllUsersComponent},
  {path:'admin/getUserByUserName/:userName',component:GetUserByUserNameComponent},

  {path:'login',component:UserComponent},
  {path:'registration',component:RegistrationComponent},

  {path:'',component: CustomerComponent},
  {path:'user/seeAllHotel',component:SeeAllHotelComponent},
  {path:'user/searchHotelByCity/:city',component:SearchHotelByCityComponent},
  {path:'user/searchHotelById/:id',component:SeeParticularHotelComponent},
  {path:'user/searchRoomByHotelId/:id',component:SeeRoomOfHotelComponent},

   /* booking module routes here */
   {path:'addBookingDetails',component:AddBookingComponent},
   {path:'fetchAllBookingDetails',component:FetchAllBookingComponent},
   {path:'deleteBookingDetailsById/:id',component:DeleteBookingComponent},
   {path:'findBookingDetailsById/:id',component:FindBookingByIdComponent},
   {path:'updateBookingDetailsById/:id',component:UpdateBookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
