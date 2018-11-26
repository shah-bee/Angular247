import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Output()  onGameStarted = new EventEmitter<{ startCounter : number}>();

  inc: number = 1;
  interval;
  constructor() { }

  ngOnInit() {
  }

  onStart() {
    setInterval(() => {
      this.inc = this.inc + 1;
      this.onGameStarted.emit({
        startCounter: this.inc
      })
      console.log(this.inc);
    }, 3000);
    
  }

}
