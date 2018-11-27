import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Output('evenCounter') evenCounter = new EventEmitter<{ counter: number }>();
  @Output('oddCounter') oddCounter = new EventEmitter<{ counter: number }>();

  inc: number = 1;
  interval;
  constructor() { }

  ngOnInit() {
  }

  onStart() {
    setInterval(() => {
      this.inc = this.inc + 1;
      if (this.inc % 2 == 0) {
        this.evenCounter.emit({
          counter: this.inc
        })
      } else {
        this.oddCounter.emit({
          counter: this.inc
        })
      }
    }, 3000);

  }

}
