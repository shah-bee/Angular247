import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {

  EvenNumberDisplay: number;
  constructor() { }

  ngOnInit() {
  }

  onEven(data){
    this.EvenNumberDisplay = data.startCounter;
  }
}
