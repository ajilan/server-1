import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter <{serverName: string, serverContent: string}>();
  
  serverName = '';
  serverContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput : HTMLInputElement){
    this.serverCreated.emit({
      //serverName : this.serverName,
      serverName: nameInput.value,
      serverContent: this.serverContent
    })
  }
  onAddBlueprint(nameInput : HTMLInputElement){
    this.blueprintCreated.emit({
      serverName: nameInput.value,
     serverContent: this.serverContent
    })
  }
}

