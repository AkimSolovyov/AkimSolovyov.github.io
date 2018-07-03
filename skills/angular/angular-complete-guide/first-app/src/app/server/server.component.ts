import {Component} from '@angular/core';

@Component({selector: 'app-server', templateUrl: './server.component.html'})

export class ServerComponent {
  serverID = 10;
  serverStatus = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'ofline';
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
