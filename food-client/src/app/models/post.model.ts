export interface Post {
  userId: string;
  postId: string;
  title: string;
  description: string;
  location: string;
  pickUpTime: string;
  datePosted: number;
  likes: number;
  interest: number;
  active: boolean;
  expirationDate: string;
  image: string;
}
