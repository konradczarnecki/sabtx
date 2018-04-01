export interface User {
  username: string;
  password: string;
}

export interface Response<T> {
  status: string;
  message: string;
  data: T;
}

export interface Tokens {
  access_token: string;
  refresh_token: string;
}

export interface Card {
  color: string;
  value: number;
}

export interface Hand {
  cards: Card[];
}
