import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {rootReducer} from "./store/reducers/main";
import {RouterModule} from "@angular/router";
import {RouterEffects} from "../sabtx/router/router.effects";
import { HomeComponent } from './home/home.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";
import {HttpClientModule} from "@angular/common/http";
import {LoginModule} from "../sabtx/login/login.module";
import {routerReducer, StoreRouterConnectingModule} from "@ngrx/router-store";
import {routes} from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({...rootReducer, routerReducer}),
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
    EffectsModule.forRoot([RouterEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
