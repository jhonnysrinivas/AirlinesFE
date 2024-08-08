import { Component } from '@angular/core';
import { BookingComponent } from '../booking/booking.component';
import { BookingService } from '../services/booking.service';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-booking',
  templateUrl: './list-booking.component.html',
  styleUrls: ['./list-booking.component.css']
})
export class ListBookingComponent {
  booking:any;
  bookingCount:any;
  status:any;
  successMessage:any;
  constructor(private route:ActivatedRoute,private bookingSer:BookingService,private userSer:UserService,private router:Router){
    this.route.params.subscribe(params => {
      this.status = params['status'];
    });
    this.successMessage = "";
    if(this.status == "Confirmed"){
      this.successMessage = "Booking Confirmed";
    }
    if(userSer.isUserLoggedIn())
      this.listBooking(userSer.getUserId());
    else
      this.router.navigate(["/login"]);
  }
    
  listBooking(userId:any){
    this.bookingSer.listBooking(userId).subscribe((data)=>{
      this.booking = data;
      this.bookingCount = this.booking.length;
    });
  }


}
