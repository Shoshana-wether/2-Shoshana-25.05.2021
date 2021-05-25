import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-forcast',
  templateUrl: './forcast.component.html',
  styleUrls: ['./forcast.component.css']
})
export class ForcastComponent implements OnInit {
@Input()forcast
@Input()maxTempetureItem
  constructor() { }

  ngOnInit() {
  }

}
