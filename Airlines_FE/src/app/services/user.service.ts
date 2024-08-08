import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{
  user:any;
 userId:any;
 constructor(private http:HttpClient) { }
 ngOnInit(): void {
 }

 getUserId(){
 console.warn("userId", sessionStorage.getItem("userId"));
 return sessionStorage.getItem("userId");
 }

 
 getAccountType(){
  return sessionStorage.getItem("accountType");
  }

  login(userName:string,password:string){
  const headers = new HttpHeaders ({'Content-Type': 'application/json'});
  return this.http.post<any>("https://localhost:7203/api/User/login?userName="+userName+"&password=" + password,null,{headers: headers});
  }

  isUserLoggedIn(){
    if(sessionStorage.getItem("userId") == null)
      return false;
    return true;
  }

  getUserDetails(userId:any){
    console.warn("get user details from", "https://localhost:7203/api/User/" + userId);
    return this.http.get("https://localhost:7203/api/User/" + userId);
  }

  updateUserDetails(user:any){
    return this.http.put<any>("https://localhost:7203/api/User/" + user.userId , user);
  }

  updateSessionStorage(user:any){
    sessionStorage.setItem("userId",user.userId);
    sessionStorage.setItem("userName",user.userName);
  }

  addUser(user:any){
    return this.http.post<any>("https://localhost:7203/api/User", user);
  }
}
