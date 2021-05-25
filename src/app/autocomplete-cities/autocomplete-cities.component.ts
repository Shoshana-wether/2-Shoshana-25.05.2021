import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {switchMap, debounceTime, tap, finalize} from 'rxjs/operators';
import { AppService } from '../app.service';
import { City } from '../../Models/City';

@Component({
  selector: 'app-autocomplete-cities',
  templateUrl: './autocomplete-cities.component.html',
  styleUrls: ['./autocomplete-cities.component.css']
})
export class AutocompleteCitiesComponent implements OnInit {
  citiesList: City[];
  citiesForm: FormGroup;
  isLoading = false;
  @Output() select: EventEmitter<any> = new EventEmitter();
 

  constructor(private fb: FormBuilder, private appService: AppService) {
    this.citiesForm = new FormGroup({});
  }

  ngOnInit() {
   
    
    this.citiesForm = this.fb.group({
      userInputData: null
    })
    
    this.citiesForm
    .get('userInputData')!
    .valueChanges
    .pipe(
      debounceTime(300),
      tap(() => this.isLoading = true),
      switchMap(value => this.appService.getLocations(value)
      .pipe(
        finalize(() => this.isLoading = false),
        )
      )
    )
    .subscribe(cities => 
      {
        
  
     this.citiesList= JSON.parse(JSON.stringify(cities)); 

    });
  
  }

  displayFn(city: any) {
    if (city) { 
      this.select.emit(city);
      return city.LocalizedName + " | "+ city.Country.LocalizedName; 
    }
    return "";
  }
}


