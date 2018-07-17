import { Post } from './post.model';

export interface User {
  email: string;
  username: string;
  forename: string;
  surname: string;
  dob: string;
  address: string;
  posts: Post[];
}
