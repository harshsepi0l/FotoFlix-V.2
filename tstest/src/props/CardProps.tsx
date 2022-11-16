export interface CardProps {
    publicOrPrivate: number;
    url: string;
    title: string;
    description: string;
    dislikes: number;
    isScroll?: boolean;
    avatar: string;
    likes: number;
    tags: string;
    favorite: number;
    key: any;
    id: number;
    uid?: number;
  }