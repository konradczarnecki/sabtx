import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {loginReducer} from "./store/store";
import {FormsModule} from "@angular/forms";
import {LoginEffects} from "./store/login.effects";
import {UserService} from "./service/user.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('login', loginReducer),
    EffectsModule.forFeature([LoginEffects])
  ],
  providers: [
    UserService
  ]
})
export class LoginModule { }
