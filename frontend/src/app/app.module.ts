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
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {LoginEffects} from "./user/login.effects";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    RouterModule.forRoot(routes),
    EffectsModule.forRoot([LoginEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production // Restrict extension to log-only mode
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
