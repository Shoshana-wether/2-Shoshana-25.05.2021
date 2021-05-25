import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { City } from '../Models/City';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  forcast: any[] = [];
 
  maxTempeture:any=0;
  maxTempetureItem:any;
  cityName:string = "Jerusalem | Israel";
  currentCondition:CurrentCondition
  constructor (private appService: AppService) { }

  ngOnInit(): void {
    this.setForecast(213225);

  }
 
  selectForecast(city: any) {
    this.cityName = city.LocalizedName + " | "+ city.Country.LocalizedName; 
    this.setForecast(city.Key);
  }

  setForecast(cityKey: number) {
    this.appService.getCurrentCondition(cityKey).subscribe(r => {
    
      this.currentCondition = r[0] as CurrentCondition;
    });
    this.maxTempeture=0.0;
    this.appService.getForecast(cityKey).subscribe(r => {
      this.forcast = r.DailyForecasts;
      this.forcast.forEach(maxtemp=>{
        if(maxtemp.Temperature.Maximum.Value>this.maxTempeture)
        {
            this.maxTempetureItem=maxtemp;
           this. maxTempeture=maxtemp.Temperature.Maximum.Value;
        }
      })
     
    });
  }
}