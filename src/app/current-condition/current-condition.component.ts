import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-condition',
  templateUrl: './current-condition.component.html',
  styleUrls: ['./current-condition.component.css']
})
export class CurrentConditionComponent implements OnInit {
 @Input() cityName: string
 displayC:boolean=true;
  @Input() currentCondition: CurrentCondition;
  
  constructor() { }

  ngOnInit() {
  }
  change(){
    this.displayC=!this.displayC;
   }
}
