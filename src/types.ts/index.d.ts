export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface ILogin {
  email: string;
  password: string;
}

export interface IAuthState {
  isLoggedIn: boolean;
}
export interface IArticle {
  cover: string;
  title: string;
  text: string;
  avatar: string;
  name: string;
  date: Date;
}
