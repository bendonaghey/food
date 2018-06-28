import { Post } from './post.model';

export interface User {
  userId: string;
  email: string;
  username: string;
  forename: string;
  surname: string;
  dob: string;
  address: string;
  posts: Post[];
}
