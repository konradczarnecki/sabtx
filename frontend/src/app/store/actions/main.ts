import {Action} from "@ngrx/store";
import {Tokens, User} from "../../model";

export const USER_LOGIN_SUBMIT = 'USER_LOGIN_SUBMIT';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export interface LoginAction extends Action {
  payload?: User | string | Tokens;
}

export const loginSubmit = (user: User): LoginAction => ({ type : USER_LOGIN_SUBMIT, payload : user });
export const loginSuccess = (tokens: Tokens): LoginAction => ({ type : USER_LOGIN_SUCCESS, payload : tokens });
export const loginFailure = (errorMessage): LoginAction => ({ type : USER_LOGIN_FAILURE, payload : errorMessage });
