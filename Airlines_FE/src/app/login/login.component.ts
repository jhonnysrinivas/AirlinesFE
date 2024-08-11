import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errorMessage:any
  user:any;
  constructor(private userSer:UserService,private router:Router){
    this.errorMessage = "";
  }
  login(user:any){
    this.userSer.login(user.userName,user.password).subscribe(
      data => {
        console.warn("vachindhi", data);
        sessionStorage.setItem("userId",data.userId);
        sessionStorage.setItem("userName",data.userName);
        sessionStorage.setItem("accountType",data.accountType);
        this.router.navigate(["/home"]);
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );       
  }
}
