export interface IBlogPost {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updateAt: string;
  user: IUser;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
  updateAt: string;
}
