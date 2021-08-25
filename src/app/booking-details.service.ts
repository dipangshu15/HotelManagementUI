import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingDetailsService {

  private url: string="http://localhost:7000/bookingdetails/fetchallbookingdetails"

  public role=new Subject<any>();

  constructor(private http:HttpClient) { 

  }

  setRoleOfUser(role:string){
    this.role.next(role);
  }

  getRoleOfUser=this.role.asObservable();

  fetchAllBookingDetails(){
    return this.http.get(this.url);
  }

  addBookingDetails(userData:any){
    console.log(userData);
    return this.http.post<any>("http://localhost:7000/bookingdetails/addbookingdetails",userData);
  }

  fetchBookingDetailsById(userData:any){
    console.log(userData);
    return this.http.get<any>("http://localhost:7000/bookingdetails/bookingdetails/"+userData);
  }

  deleteBookingDetailsById(userData:any){
    console.log(userData);
    return this.http.delete("http://localhost:7000/bookingdetails/deletebookingdetails/"+userData);
  }

  updateBookingDetails(bookId:number,userData:any){
    console.log(userData);
    return this.http.put<any>("http://localhost:7000/bookingdetails/updatebookingdetails/"+userData,bookId);
  }
}
