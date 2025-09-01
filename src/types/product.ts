export interface Product {
  id: number;
  name: string;
  category: 'beef' | 'lamb' | 'calf' | 'chicken' | 'prepared' | 'deli' | 'fish' | 'turkey' | 'grilled';
  shortDescription?: string;
  fullDescription?: string;
  price: number;
  weight: string;
  kashrutLevel: string;
  imageSrc: string;
  isPromoted: boolean;
  ingredients?: string[];
  preparationTips?: string;
}