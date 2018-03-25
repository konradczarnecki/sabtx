import {Component, OnInit} from '@angular/core';
import * as EventSource from 'eventsource';
import {Hand} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  ngOnInit(): void {

    const emitter = new EventSource('http://localhost:8080/events');

    emitter.onmessage = event => {

      let data: Hand = JSON.parse(event.data);
      console.log(data);
    }
  }


}
