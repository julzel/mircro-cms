export interface IMedia {
  images?: string[];
  videos?: string[];
}

export interface IPost {
  id: number;
  title: string;
  content: string;
  media?: IMedia;
}
