export interface Post {
  userId: string;
  postId: string;
  title: string;
  description: string;
  location: string;
  datePosted: number;
  likes: number;
  interest: number;
  active: boolean;
  expirationDate: number;
  image: string;
}
