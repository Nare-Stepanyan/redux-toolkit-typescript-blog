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
  id?: number;
  image: string;
  title: string;
  text: string;
  avatar: string;
  author: string;
  date: Date;
}

export type IArticleState = {
  articles: Array<IArticle>;
};
