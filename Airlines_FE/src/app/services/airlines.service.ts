import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirlinesService {

  constructor(private http:HttpClient){
  }
    
  listAirlines(){
    return this.http.get("https://localhost:7203/api/Airlines");
  }

  addAirlines(airlines:any){
    return this.http.post<any>("https://localhost:7203/api/Airlines",airlines);
  }
}
