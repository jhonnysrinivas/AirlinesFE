import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  errorMessage:any;
  successMessage:any;
  
  seatId:any;
  bookingId:any;
  flightId:any;
  paymentType:any;
  paymentFrom:any;
  booking:any;
  user:any;
  constructor(private route:ActivatedRoute, private router:Router, private bookingSer:BookingService
    ,private userSer:UserService){
      this.route.params.subscribe(params => {
        this.flightId = params['flightId'];
      });

      this.route.params.subscribe(params => {
        this.seatId = params['seatId'];
      });
      
      this.route.params.subscribe(params => {
        this.bookingId = params['bookingId'];
      });
      if(this.userSer.isUserLoggedIn()){
        this.user = this.userSer.getUserDetails(this.userSer.getUserId()).subscribe((data)=>{
          this.user = data;
        });
      }
      else
        this.router.navigate(["/login"]);  
     this.getBookingDetails(this.seatId);
     this.errorMessage ="";
     this.successMessage = "";     
  }

  getBookingDetails(seatId:any){
    this.bookingSer.getBookingDetails(this.seatId).subscribe((data)=>{
      this.booking = data;
      console.warn("data",data);
    })
  }


  confirmBooking(bookingDetails:any){
    console.warn("paymentType",bookingDetails);
    this.successMessage = "";
    this.errorMessage = "";
    if(bookingDetails.payment == "Credit Card"){
      if(bookingDetails.cardNumber == "" || bookingDetails.cardName == "" || bookingDetails.expiryDate == "" || bookingDetails.cvvCode == ""){
        this.errorMessage = "Please Enter all Payment Details";
      }else{
        this.paymentType = bookingDetails.payment;
        this.paymentFrom = bookingDetails.cardNumber;
        this.bookSeat();
      }
    }else if(bookingDetails.payment == "Paypal"){
      if(bookingDetails.paypalEmail == ""){
        this.errorMessage = "Please Enter all Payment Details";
      }else{
        this.paymentType = bookingDetails.payment;
        this.paymentFrom = bookingDetails.paypalEmail;
        this.bookSeat();
      }
    }else if(bookingDetails.payment == "UPI"){
      if(bookingDetails.upiId == ""){
        this.errorMessage = "Please Enter all Payment Details";
      }else{
        this.paymentType = bookingDetails.payment;
        this.paymentFrom = bookingDetails.upiId;
        this.bookSeat();
      }
    }else{
      this.errorMessage = "Please select Payment Method";
    }
  }



  bookSeat(){
         this.bookingSer.bookSeat(this.seatId,this.bookingId,this.userSer.getUserId(),this.paymentType,this.paymentFrom).subscribe(
       suc => {
        this.router.navigate(["/booking/Confirmed"])
       },
       err => {
           this.successMessage = "";
           this.errorMessage = "Selected Seat is Already Booked"
       }
       );
  }

}
