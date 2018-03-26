import {Tokens, User} from "../../model";
import {Action} from "@ngrx/store";
import {LoginAction, LOGOUT, USER_LOGIN_FAILURE, USER_LOGIN_SUBMIT, USER_LOGIN_SUCCESS} from "../actions/main";

const user = (state: User, action: LoginAction): User => {

  switch (action.type) {

    case USER_LOGIN_SUBMIT:
      return <User> action.payload;

    case USER_LOGIN_SUCCESS:
      const tokens = <Tokens> action.payload;
      if(!tokens.access_token || !tokens.refresh_token) return null;
      localStorage.setItem('token', tokens.access_token);
      localStorage.setItem('refresh_token', tokens.refresh_token)
      return state;

    case USER_LOGIN_FAILURE:
      return null;

    case LOGOUT:
      return null;

    default:
      return state;
  }
};

export const rootReducer = {
  user
};
