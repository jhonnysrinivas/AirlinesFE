import { Component } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';
import { AirlinesService } from '../services/airlines.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent {

  flight:any;
  economicSeating:any;
  businessSeating:any;
  successMessage:any;
  airlines:any;
  constructor(private flightSer:FlightService, private router:Router, private airlinesSer:AirlinesService){
    this.airlinesSer.listAirlines().subscribe((data) =>{
      this.airlines = data;
    });
    this.successMessage= "";
  }
  addFlight(flight:any){
    this.flight = flight;
    console.warn("asd",this.flight);
    this.flightSer.addFlight(this.flight).subscribe((data)=>{
      this.successMessage= "Flight Successfully Created";
    }
    );
  }
}
