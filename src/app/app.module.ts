import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelComponent } from './hotel/hotel.component';
import { GetAllHotelsComponent } from './hotel/get-all-hotels/get-all-hotels.component';
import { AddHotelComponent } from './hotel/add-hotel/add-hotel.component';
import { GetHotelByCityComponent } from './hotel/get-hotel-by-city/get-hotel-by-city.component';
import { HotelServiceService } from './hotel-service.service';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GetHotelByIdComponent } from './hotel/get-hotel-by-id/get-hotel-by-id.component';
import { DeleteHotelComponent } from './hotel/delete-hotel/delete-hotel.component';
import { FormsModule } from '@angular/forms';
import { GetRoomByHotelIdComponent } from './hotel/get-room-by-hotel-id/get-room-by-hotel-id.component';
import { FooterComponent } from './footer/footer.component';
import { CustomerComponent } from './customer/customer.component';
import { SeeAllHotelComponent } from './customer/see-all-hotel/see-all-hotel.component';
import { SeeParticularHotelComponent } from './customer/see-particular-hotel/see-particular-hotel.component';
import { SeeRoomOfHotelComponent } from './customer/see-room-of-hotel/see-room-of-hotel.component';
import { SearchHotelByCityComponent } from './customer/search-hotel-by-city/search-hotel-by-city.component';
import { DeleteRoomComponent } from './hotel/delete-room/delete-room.component';
import { UpdateRoomComponent } from './hotel/update-room/update-room.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { GetAllUsersComponent } from './get-all-users/get-all-users.component';
import { GetUserByUserNameComponent } from './get-user-by-user-name/get-user-by-user-name.component';
import { UpdateHotelComponent } from './hotel/update-hotel/update-hotel.component';
import { NavComponent } from './customer/nav/nav.component';
import { HomeComponent } from './customer/home/home.component';
import { AdminNavComponent } from './hotel/admin-nav/admin-nav.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { AddBookingComponent } from './booking-details/add-booking/add-booking.component';
import { DeleteBookingComponent } from './booking-details/delete-booking/delete-booking.component';
import { FetchAllBookingComponent } from './booking-details/fetch-all-booking/fetch-all-booking.component';
import { FindBookingByIdComponent } from './booking-details/find-booking-by-id/find-booking-by-id.component';
import { UpdateBookingComponent } from './booking-details/update-booking/update-booking.component';
import { BookingDetailsService } from './booking-details.service';
//import { HomeComponent } from './home/home.component';
//import { UpdateHotelComponent } from './hotel/update-hotel/update-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    HotelComponent,
    GetAllHotelsComponent,
    AddHotelComponent,
    GetHotelByCityComponent,
    UserComponent,
    GetHotelByIdComponent,
    DeleteHotelComponent,
    GetRoomByHotelIdComponent,
    FooterComponent,
    CustomerComponent,
    SeeAllHotelComponent,
    SeeParticularHotelComponent,
    SeeRoomOfHotelComponent,
    SearchHotelByCityComponent,
    DeleteRoomComponent,
    UpdateRoomComponent,
    RegistrationComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    GetAllUsersComponent,
    GetUserByUserNameComponent,
    UpdateHotelComponent,
    NavComponent,
    HomeComponent,
    AdminNavComponent,
    BookingDetailsComponent,
    AddBookingComponent,
    DeleteBookingComponent,
    FetchAllBookingComponent,
    FindBookingByIdComponent,
    UpdateBookingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HotelServiceService, BookingDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
