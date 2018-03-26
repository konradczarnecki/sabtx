import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './user/login.component';
import {UserService} from "./user/user.service";
import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "./store/reducers/main";
import {RouterModule} from "@angular/router";
import {routes} from "./routes";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
