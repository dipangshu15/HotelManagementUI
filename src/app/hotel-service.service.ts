import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { user } from './user';
//import { hotel } from './hotel';

@Injectable()
export class HotelServiceService {

  private url: string="http://localhost:7000/getAllHotels";

  public role=new Subject<string>();


  constructor(private http:HttpClient) { 
  }

  setRoleOfUser(role:string){
    this.role.next(role);
  }

  getRoleOfUser=this.role.asObservable();

  getAllHotels(){
    //console.log(this.http.get<hotel[]>(this.url));
    return this.http.get(this.url);
  }
  

  addHotel(userData:any){
    return this.http.post<any>("http://localhost:7000/addHotel",userData);
  }

  getHotelByCity(userData:any){
    console.log(userData);
    return this.http.post<any>("http://localhost:7000/findByCity",userData);
  }

  getHotelById(userData:any){
    return this.http.get("http://localhost:7000/findById/"+userData);
  }

  deleteHotel(userData:any){
    console.log(userData);
    return this.http.delete("http://localhost:7000/deleteHotel/"+userData);
  }

  updateHotel(userData:any){
    return this.http.put("http://localhost:7000/updateHotel/"+userData.hotel_id,userData);
  }

  loginUser(userData:any){
    return this.http.post<any>("http://localhost:7000/user/login",userData);
  }

  deleteRoom(userData:any){
    return this.http.delete("http://localhost:7000/room/deleteRoom/"+userData);
  }


  updateRoom(userData:any){
    return this.http.put("http://localhost:7000/room/updateRoom/",userData);
  }

  signUp(userData:any){
    return this.http.post("http://localhost:7000/user/saveUser",userData);
  }
  public updateUserFromRemote(user:user):Observable<any>{
    console.log(user.userName);
    return this.http.put("http://localhost:7000/user/updateUser/"+user.userName,user)

  }
  public deleteUserFromRemote(user:user):Observable<any>{
    return this.http.delete("http://localhost:7000/user/deleteUser/"+user)
  }

  public getAllUsersFromRemote():Observable<any>{
    return this.http.get("http://localhost:7000//user/getAllUser")
  }
  public getUserByUserNameFromRemote(user:user):Observable<any>{
    return this.http.get("http://localhost:7000/user/getUser/"+user)
  }

  
}
