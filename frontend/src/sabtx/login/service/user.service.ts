import { Injectable } from '@angular/core';
import {AppState} from "../../../app/store/state";
import {select, Store} from "@ngrx/store";
import {CanActivate, Routes} from "@angular/router";
import {User} from "../../../app/model/model";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {loginSubmit} from "../store/store";
import * as RouterActions from '../../router/actions';
import {selectUser} from "../store/store";

@Injectable()
export class UserService implements CanActivate {

  user: BehaviorSubject<User>;

  constructor(private store: Store<AppState>) {
    this.user = new BehaviorSubject(null);
    store.pipe(select(selectUser)).subscribe(user => this.user.next(user));
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
    let logged = this.userLogged();
    if(!logged) this.store.dispatch(new RouterActions.Go({path: ['/login']}));
    return logged;
  }
}

