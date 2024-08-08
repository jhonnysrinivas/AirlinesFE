import { Component } from '@angular/core';
import { AirlinesService } from '../services/airlines.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent {
  airlines:any;
  constructor(private airlinesSer:AirlinesService,private userSer:UserService,private router:Router){
    this.lisrAirlines();
  }
    
  lisrAirlines(){
    this.airlinesSer.listAirlines().subscribe((data)=>{
      this.airlines = data;
    });
  }
}
