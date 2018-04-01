import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import LoginFeature from "../sabtx/login";

let routes: Routes = [
  { path : '', component: HomeComponent, pathMatch : 'full'}
];

// LoginFeature.addGuard(routes, []);

export {routes};
