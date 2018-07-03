import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    userName = '';
    btnDisabled = true;

    onFieldUpdate() {
      if (this.userName !== '') {
        this.btnDisabled = false;
      }
    }
    resetField() {
      this.userName = '';
      this.btnDisabled = true;
    }
}
