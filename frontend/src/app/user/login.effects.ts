import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {LoginAction, loginFailure, loginSuccess, USER_LOGIN_SUBMIT} from "../store/actions/main";
import {catchError, map, mergeMap} from "rxjs/operators";
import {User, Response, Tokens} from "../model";
import {environment as env} from "../../environments/environment";
import {of} from "rxjs/observable/of";

@Injectable()
export class LoginEffects {

  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(

    ofType(USER_LOGIN_SUBMIT),
    mergeMap((action: LoginAction) =>

      this.http.post<Tokens>(env.apiUrl + env.endpoints.token, action.payload).pipe(
        map(tokens => !!tokens.access_token ? loginSuccess(tokens) : loginFailure("Auth failure")),
        catchError(err => of(loginFailure(err)))
      )
    )
  )
}
