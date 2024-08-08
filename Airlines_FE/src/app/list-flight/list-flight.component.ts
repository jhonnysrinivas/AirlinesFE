import { Component } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AirlinesComponent } from '../airlines/airlines.component';
import { AirlinesService } from '../services/airlines.service';
@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.css']
})
export class ListFlightComponent {
  flights:any;
  airlines:any;
  constructor(private flightSer:FlightService, private router:Router, private userSer:UserService
    ,private airlinesSer:AirlinesService){
    this.flightSer.listFlight("","","").subscribe((data)=>{
      this.flights = data
    });

    this.airlinesSer.listAirlines().subscribe((data)=>{
      this.airlines = data
    });
  }

  listFlights(flight:any){
    console.warn("vasthundhi f");
    flight.flightName = (flight.flightName == null)? "" : flight.flightName;
    flight.airlines = (flight.airlines == null)? "" : flight.airlines;
    flight.sorting = (flight.sorting == null)? "" : flight.sorting;

     this.flightSer.listFlight(flight.flightName,flight.airlines,flight.sorting).subscribe((data)=>{
      this.flights = data
    });
  }
  openFlightDetails(flightId:any){
    this.router.navigate(["/flight/", flightId])
  }

  getAccountType(){
    if(this.userSer.isUserLoggedIn()){
      return this.userSer.getAccountType();
    }
    return "";
  }
}
