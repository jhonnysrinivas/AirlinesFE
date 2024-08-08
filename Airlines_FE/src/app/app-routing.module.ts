import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFlightComponent } from './list-flight/list-flight.component';
import { FlightComponent } from './flight/flight.component';
import { BookingComponent } from './booking/booking.component';
import { OffersComponent } from './offers/offers.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { LoginComponent } from './login/login.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MapComponent } from './map/map.component';
import { AddAirlinesComponent } from './add-airlines/add-airlines.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'flights', component:ListFlightComponent},
  {path:'flight/:id', component:FlightComponent},
  {path:'booking/:flightId/:seatingId/:seatId/:seatStatus', component:BookingComponent},
  {path:'home', component:HomeComponent},
  {path:'booking/:status', component:ListBookingComponent},
  {path:'login', component:LoginComponent},
  {path:'addFlight', component:AddFlightComponent},
  {path:'airlines', component:AirlinesComponent},
  {path:'update-user', component:UpdateUserComponent},
  {path:'register', component:SignUpComponent},
  {path:'map', component:MapComponent},
  {path:'add-airlines', component:AddAirlinesComponent},
  {path:'payment/:flightId/:seatId/:bookingId', component:PaymentComponent},
  {path:'invoice/:seatId', component:InvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
