import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<number>();
  number = 0;
  game: any;

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    this.game = setInterval(() => {
      this.gameStarted.emit(this.number + 1);
      this.number++;
      // console.log(this.number);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.game);
  }
}
