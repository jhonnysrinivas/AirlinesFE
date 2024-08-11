import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user:any;
  successMessage:any;
  errorMessage:any;
  constructor(private userSer:UserService){   
    this.successMessage = "";
    this.errorMessage = "";
  }
  signUp(user:any){
    if(user.accountType == true)
      user.accountType = "Airlines"
    else
      user.accountType = "Normal"
    this.userSer.addUser(user).subscribe(
      suc => {
          this.successMessage = "Account SuccessFully Created";
          this.errorMessage = "";
      },
      err => {
          this.successMessage = "";
          this.errorMessage = err.error.message;
      }
  );
  }
}
