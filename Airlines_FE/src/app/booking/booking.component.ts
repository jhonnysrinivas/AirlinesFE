import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit{
  flightId:any;
  seatId:any;
  booking:any;
  userId:any;
  bookingId:number = Date.now();
  successMessage:any;
  errorMessage:any;
  seatStatus:any;
  constructor(private route:ActivatedRoute, private router:Router, private bookingSer:BookingService
    ,private userSer:UserService){
    
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.flightId = params['flightId'];
    });

    this.route.params.subscribe(params => {
      this.seatId = params['seatId'];
    });

    this.route.params.subscribe(params => {
      this.seatStatus = params['seatStatus'];
    });
    this.successMessage = "";
    this.errorMessage = "";
    if(this.seatStatus=="Booked"){
      this.errorMessage = "Selected Seat is Already Booked";
    }else if(!this.userSer.isUserLoggedIn()){
      this.errorMessage = "Please Login to get the Booking Option";
    }else if(this.userSer.getAccountType() == 'Airlines'){
      this.errorMessage = "Booking option not applicable for Airlines Staff"
    }else if(this.seatStatus=="Confimed"){
      this.errorMessage = "";
      this.successMessage = "Booking Confirmed";
    }
    this.getBookingDetails(this.seatId);
  }

  getFlightDetails(){
    this.router.navigate(["/flight/" + this.flightId])
  }

  getBookingDetails(seatId:any){
    this.bookingSer.getBookingDetails(this.seatId).subscribe((data)=>{
      this.booking = data;
      console.warn("data",data);
    })
  }

  confirmBooking(){
    this.router.navigate(["/payment/" + this.flightId + "/" + this.seatId + "/"+  this.bookingId])
  }
}
