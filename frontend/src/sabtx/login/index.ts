import {Routes} from "@angular/router";
import {createFeatureSelector, createSelector} from "@ngrx/store";
import {default as LoginState, selectUser} from "./store/store";
import {UserService} from "./service/user.service";

export const addGuard = (routes: Routes, exclude: string[]) => {
  for(const route of routes)
    if (route.path !== 'login' && !exclude.includes(route.path))
      route.canActivate = [UserService];
};

export default {
  selectUser,
  addGuard
}
