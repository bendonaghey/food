import { Post } from './post.model';

export interface User {
  email: string;
  bio: string;
  username: string;
  firstname: string;
  lastname: string;
  dob: string;
  address: {
    doorNumber: string;
    streetName: string;
    postcode: string;
    city: string;
    county: string;
  };
  location: {
    long: number;
    lat: number;
  };
  posts: Post[];
}
