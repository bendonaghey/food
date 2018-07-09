import { Post } from './post.model';

export interface User {
  // !Not needed
  userId: string;

  email: string;
  username: string;
  forename: string;
  surname: string;
  dob: string;
  address: string;
  posts: Post[];
}
