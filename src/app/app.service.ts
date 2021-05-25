import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  baseUrl: string = "http://localhost:49238/api/";
  constructor(private http: HttpClient) { }
 //  key="zY5mgzGL376ZuxbfDGlhO4NhKOOfdNaZ";
   //key="9GWwBEJiViCpuWXfRjb7w6yDuX4fec6d";
  key="DH6v2sA1Y3hI7KKkG9VSSNdNxAF1uft3";
   public getLocations(query: string): Observable<any> {
    return this.http.get("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+this.key+"&q="+query+"&language=en-us",{withCredentials: true},);
  }

  public getCurrentCondition(cityKey: number): Observable<any> {
   return this.http.get("http://dataservice.accuweather.com/currentconditions/v1/"+cityKey+"?apikey="+this.key+"&language=en-us&details=false",{withCredentials: true},);
  }

  public getForecast(cityKey: number): Observable<any> {
   
    return this.http.get("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+cityKey+"?apikey="+this.key+"&language=en-us&details=false&metric=true",{withCredentials: true},);
   
  }
} 