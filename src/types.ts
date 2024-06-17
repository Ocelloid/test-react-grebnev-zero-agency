export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comment[] | null;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type User = {
  login: string;
  password: string;
};
