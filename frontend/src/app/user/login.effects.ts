import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {HttpClient} from "@angular/common/http";
import {LoginAction, loginFailure, loginSuccess, USER_LOGIN_SUBMIT} from "../store/actions/main";
import {catchError, map, mergeMap} from "rxjs/operators";
import {User, Response} from "../model";
import {environment as env} from "../../environments/environment";
import {of} from "rxjs/observable/of";

@Injectable()
export class LoginEffects {

  constructor(private http: HttpClient, private actions$: Actions) {}

  @Effect()
  login$: Observable<Action> = this.actions$.pipe(

    ofType(USER_LOGIN_SUBMIT),
    mergeMap((action: LoginAction) =>

      this.http.post<Response<User>>(env.endpoints.token, action.payload).pipe(
        map(rsp => rsp.status === 'success' ? loginSuccess(rsp.data) : loginFailure(rsp.message)),
        catchError(err => of(loginFailure(err)))
      )
    )
  )
}
