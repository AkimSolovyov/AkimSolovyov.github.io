import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  number: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStarted(num: number) {
    if(num % 2 === 0) {
      this.evenNumbers.push(num);
    } else {
      this.oddNumbers.push(num);
    }
    console.log(num);
    this.number = num;
  }
}
