export interface CardProps {
  publicOrPrivate: number;
  url: string;
  title: string;
  description: string;
  dislikes: number;
  isScroll?: boolean;
  avatar: string;
  likes: number;
  // favorite: number;
  tags: string;
  keyprop: any;
  id: number;
  uid?: number;
}
