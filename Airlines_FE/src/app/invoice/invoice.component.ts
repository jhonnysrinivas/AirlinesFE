import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../services/booking.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  seatId:any;
  booking:any;
  user:any;

    
  constructor(private route:ActivatedRoute, private router:Router, private bookingSer:BookingService
    ,private userSer:UserService){
      this.route.params.subscribe(params => {
        this.seatId = params['seatId'];
      });
      if(userSer.isUserLoggedIn())
        this.loadBookingDetails(this.seatId);
      else
        this.router.navigate(["/login"]);
    }

    loadBookingDetails(seatId:any){
      this.bookingSer.getBookingDetails(this.seatId).subscribe((data)=>{
        this.booking = data;
      });
      this.userSer.getUserDetails(this.userSer.getUserId()).subscribe((data)=>{
        this.user = data;
      });
    }
}
