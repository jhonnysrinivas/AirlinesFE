import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) {
  }

  getBookingDetails(seatId:any){
    return this.http.get("https://localhost:7203/api/Booking/" + seatId);
  }

  bookSeat(seatId:any,bookingId:any,userId:any,paymentType:any,paymentFrom:any){
    return this.http.post("https://localhost:7203/api/Booking/"+seatId+"?userId="+userId+"&bookingId=" + bookingId + "&paymentType=" + paymentType +"&paymentFrom=" + paymentFrom,null);
  }

  listBooking(userId:any){
    return this.http.get("https://localhost:7203/api/Booking/" + userId + "/all");
  }
}
