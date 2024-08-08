import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFlightComponent } from './list-flight/list-flight.component';
import { FlightComponent } from './flight/flight.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingComponent } from './booking/booking.component';
import { OffersComponent } from './offers/offers.component';
import { ListBookingComponent } from './list-booking/list-booking.component';
import { LoginComponent } from './login/login.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { FormsModule } from '@angular/forms';
import { AirlinesComponent } from './airlines/airlines.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MapComponent } from './map/map.component';
import { AddAirlinesComponent } from './add-airlines/add-airlines.component';
import { PaymentComponent } from './payment/payment.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    ListFlightComponent,
    FlightComponent,
    BookingComponent,
    OffersComponent,
    ListBookingComponent,
    LoginComponent,
    AddFlightComponent,
    AirlinesComponent,
    UpdateUserComponent,
    SignUpComponent,
    MapComponent,
    AddAirlinesComponent,
    PaymentComponent,
    InvoiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
