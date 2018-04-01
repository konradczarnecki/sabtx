import {Component, OnInit} from '@angular/core';
import * as EventSource from 'eventsource';
import {Hand} from "./model/model";
import {Subject} from "rxjs/Subject";
import {Store} from "@ngrx/store";
import {AppState} from "./store/state";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  eventBus: Subject<any>;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {

    // const emitter = new EventSource('http://localhost:8080/events');
    // this.eventBus = new Subject();
    //
    // emitter.onmessage = event => {
    //
    //   let data: Hand = JSON.parse(event.data);
    //   this.eventBus.next(data);
    // }

  }


}
