import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = "No server was created";
    serverName = 'testServer';
    serverCreated = false;
    serverss = ['servertest','servertest 2'];
    constructor(){
        setTimeout(() => {
          this.allowNewServer = true;
        }, 2000);
    }
    onCreateServer(){
      this.serverCreated = true;
      this.serverss.push(this.serverName);
        this.serverCreationStatus = "Server is created";
    }
    onUpdateServerName(event: any){
      this.serverName = (<HTMLInputElement>event.target).value;
    }
}
