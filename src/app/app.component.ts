import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  serverName = '';
  serverContent = '';

  onAddServer(){
    this.serverElements.push({
      type: 'server',
      name: this.serverName,
      content : this.serverContent
    })
  }
  onAddBlueprint(){
    this.serverElements.push({
      type: 'blueprint',
      name:this.serverName,
      content: this.serverContent
    })
  }
}
