import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  user:any;
  errorMessage:any;
  successMessage:any;

  constructor(private userSer:UserService,private router:Router){    
  }
  ngOnInit(): void {
    this.errorMessage = "";
    this.successMessage = "";
    if(this.userSer.isUserLoggedIn()){
      this.user = this.userSer.getUserDetails(this.userSer.getUserId()).subscribe((data)=>{
        this.user = data;
      });
    }
    else
      this.router.navigate(["/login"]);
  }

  updateUser(user:any){
    this.user.userName = (user.userName == "")? this.user.userName: user.userName;
    this.user.email = (user.email == "")? this.user.email: user.email;
    this.user.password = (user.password == "")? this.user.password: user.password;
    this.user.cardNumber = user.cardNumber;
    this.user.cardName = user.cardName;
    this.user.expiryDate = user.expiryDate;
    this.user.cvvCode = user.cvvCode;


      console.warn("update-user body", user);
      this.userSer.updateUserDetails(this.user).subscribe(
        suc => {
          this.successMessage = "User Details Successfully Updated";
          this.errorMessage = "";
          //update session details
          this.userSer.updateSessionStorage(this.user);
      },
      err => {
          this.successMessage = "";
          this.errorMessage = "Error While Updating User Details"
      });      
  }
}
