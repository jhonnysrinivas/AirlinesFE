import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightService } from '../services/flight.service';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit{

  flightId:any;
  flight:any;
  accountType:any;
  constructor(private flightSer:FlightService,private route:ActivatedRoute, private router:Router
    ,private userSer:UserService){
    this.route.params.subscribe(params => {
      this.flightId = params['id'];
    });
  }
  ngOnInit(): void {
    this.getFlightDetails();
  }

  getFlightDetails(){
    this.flightSer.getFlightDetails(this.flightId).subscribe((data)=>{
      this.flight = data;
      console.warn("data",data);
    })
  }

  selectSeat(flightId:any,seatingId:any,seatId:any,seatStatus:any){
    console.warn("ok",seatingId);
    this.router.navigate(["/booking/" + flightId + "/" + seatingId + "/"+ seatId + "/" + seatStatus])
  }

  getColor(){
    return "green";
  }
}
