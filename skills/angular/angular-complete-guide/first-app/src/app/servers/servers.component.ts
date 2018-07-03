import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-servers', templateUrl: './servers.component.html', styleUrls: ['./servers.component.css']})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverCreated = false;
  serverName = '';
  detailsToggled = false;
  logs = [];
  clicks = 0;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created. Name is' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  toggleDetails() {
    // this.logs.push(this.clicks++);
    this.logs.push(new Date());
    this.detailsToggled = !this.detailsToggled;
  }

}
