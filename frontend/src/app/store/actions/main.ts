import {Action} from "@ngrx/store";

export const SAY_HELLO = 'SAY_HELLO';
export class SayHelloAction implements Action {
  readonly type = SAY_HELLO;
  constructor(public name: string) {}
}
