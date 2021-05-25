import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }
  key="DH6v2sA1Y3hI7KKkG9VSSNdNxAF1uft3";
   public getLocations(query: string): Observable<any> {
    return this.http.get("https://yacdn.org/serve/https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey="+this.key+"&q="+query+"&language=en-us",{withCredentials: true},);
  }

  public getCurrentCondition(cityKey: number): Observable<any> {
   return this.http.get("https://yacdn.org/serve/https://dataservice.accuweather.com/currentconditions/v1/"+cityKey+"?apikey="+this.key+"&language=en-us&details=false",{withCredentials: true},);
  }

  public getForecast(cityKey: number): Observable<any> {
   
    return this.http.get("https://yacdn.org/serve/https://dataservice.accuweather.com/forecasts/v1/daily/5day/"+cityKey+"?apikey="+this.key+"&language=en-us&details=false&metric=true",{withCredentials: true},);
   
  }
} 
