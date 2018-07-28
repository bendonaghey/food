export interface Post {
  title: string;
  description: string;
  pickUpTime: string;
  datePosted: string;
  active: boolean;
  expirationDate: string;
  imageUrl: string;
  id?: string;
  userRef?: any;
  address: string;
  lat: number;
  lng: number;
}
