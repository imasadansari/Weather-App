import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-datetrial',
  templateUrl: './datetrial.component.html',
  styleUrls: ['./datetrial.component.css']
})
export class DatetrialComponent implements OnInit {

  constructor(){}
  
  ngOnInit(): void {
  }
  name = 'Angular ';
  today = new Date();
  pipe = new DatePipe('en-US');
  toShow = this.pipe.transform(this.today, 'EEE | MMM d | h:mm a');  

}
