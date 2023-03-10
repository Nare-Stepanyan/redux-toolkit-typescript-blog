export interface IUser {
  id?: string;
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
  avatar?: string;
  author: string;
  date: string;
  comments?: Array<string>;
}

export type IArticleState = {
  articles: Array<IArticle>;
};
