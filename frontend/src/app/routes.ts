import {Routes} from "@angular/router";
import {LoginComponent} from "./user/login.component";
import {UserService} from "./user/user.service";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path : 'login', component: LoginComponent },
  { path : '', component: HomeComponent, pathMatch : 'full', canActivate : [UserService]}
];
