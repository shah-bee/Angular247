import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-ang-app';
  evenCounter: number;
  oddCounter: number;

  evenGameCounter(GameData: { counter: number }) {
    this.evenCounter = GameData.counter;
  }

  oddGameCounter(GameData: { counter: number }) {
    this.oddCounter = GameData.counter;
  }
}
