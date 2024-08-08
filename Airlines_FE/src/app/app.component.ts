import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user:any;
  userId:any;
  userName:any;
  AppComponent = AppComponent;
  constructor(private userSer:UserService,private router:Router){
  }
  ngOnInit(): void {
    this.userId = sessionStorage.getItem("userId");
  }

  updateUserData(user:any){
    this.user = user;
  }
  logout(){
    console.warn("userId",sessionStorage.getItem("userId"));
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userName");
    console.warn("userId",sessionStorage.getItem("userId"));
    this.router.navigate(["/home"])
  }
  getUserId(){
    if(sessionStorage.getItem("userId") == null)
      return true;
    else{
      this.userName = sessionStorage.getItem("userName");
      return false;
    }
  }
}
