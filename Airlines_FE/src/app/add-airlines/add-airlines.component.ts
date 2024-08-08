import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { AirlinesService } from '../services/airlines.service';

@Component({
  selector: 'app-add-airlines',
  templateUrl: './add-airlines.component.html',
  styleUrls: ['./add-airlines.component.css']
})
export class AddAirlinesComponent {
  errorMessage:any;
  successMessage:any;
  enableAddButton:any;
  constructor(private userSer:UserService,private airlinesSer:AirlinesService){
    if(userSer.isUserLoggedIn()){
      if(userSer.getAccountType() == "Normal"){
        this.errorMessage = "This option is enabled for Airlines Staff."
        this.enableAddButton = "Yes";
      }else{
        this.errorMessage = "";
        this.enableAddButton = "";
      }
    }else{
      this.errorMessage = "Please Login to Enable this option.";
      this.enableAddButton = "Yes";
    }

    this.successMessage = "";
  }

  addAirlines(airlines:any){
    this.airlinesSer.addAirlines(airlines).subscribe(
      suc => {
          this.successMessage = "Airlines Added Successfull";
          this.enableAddButton = "";
      },
      err => {
          this.successMessage = "";
          this.errorMessage = "Airlines Name already Exists";
          this.enableAddButton = "";
      }
  );
  }
}
