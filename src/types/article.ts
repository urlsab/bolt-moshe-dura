export interface Article {
  id: number;
  title: string;
  shortDescription: string;
  content: string;
  category: string;
  imageSrc: string;
  date: string;
  author?: string;
}