import { Post } from './post.model';

export interface User {
  email: string;
  bio: string;
  username: string;
  firstname: string;
  lastname: string;
  dob: string;
  posts: Post[];
}
