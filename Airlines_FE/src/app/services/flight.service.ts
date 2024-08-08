import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient) {

  }

  listFlight(flightName:any,airlines:any,sorting:any){
    return this.http.get("https://localhost:7203/api/Flight?flightName="+flightName+"&airlines=" + airlines+"&sorting=" + sorting);  
  }

  getFlightDetails(flightId:any){
    return this.http.get("https://localhost:7203/api/Flight/" + flightId);
  }

  addFlight(flight:any): Observable<any>{
    return this.http.post<any>("https://localhost:7203/api/Flight/1", flight);
  }
}
