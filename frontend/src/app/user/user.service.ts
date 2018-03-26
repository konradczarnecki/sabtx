import { Injectable } from '@angular/core';
import {AppState} from "../store/state";
import {Store} from "@ngrx/store";
import {CanActivate} from "@angular/router";
import {User} from "../model";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {loginSubmit} from "../store/actions/main";

@Injectable()
export class UserService implements CanActivate {

  user: BehaviorSubject<User>;

  constructor(private store: Store<AppState>) {
    this.user = new BehaviorSubject(null);
    store.select('user').subscribe(user => this.user.next(user));
  }

  login(username: string, password: string) {

    const user: User = {
      username,
      password
    };

    this.store.dispatch(loginSubmit(user));
  }

  userLogged(): boolean {
    return !!this.user.getValue();
  }

  canActivate(): boolean {
    return this.userLogged();
  }
}
